var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var ProfileConstants = require('../constants/profile_constants');

var ProfileStore = new Store(AppDispatcher);

var _forms = {};

var resetForms = function(forms) {
  _forms = {};

  forms.forEach(function(form){
    _forms[form.id] = form;
  });
};

var addForm = function(form) {
  _forms[form.id] = form;
};

var removeForm = function(form) {
  delete _forms[form.id];
};

ProfileStore.all = function () {
  return Object.keys(_forms).map(function (formId){
    return _forms[formId];
  });
};

ProfileStore.find = function (id) {
  return _forms[id];
};


ProfileStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case ProfileConstants.GET_FORMS:
      resetForms(payload.forms);
      this.__emitChange();
      break;
    case ProfileConstants.RECEIVE_FORM:
      addForm(payload.form);
      this.__emitChange();
      break;
    case ProfileConstants.REMOVE_FORM:
      removeForm(payload.form);
      this.__emitChange();
      break;
  }
};
module.exports = ProfileStore;
