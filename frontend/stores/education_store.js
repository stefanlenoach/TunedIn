var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var EducationConstants = require('../constants/education_constants');

var EducationStore = new Store(AppDispatcher);

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

EducationStore.all = function () {
  return Object.keys(_forms).map(function (formId){
    return _forms[formId];
  });
};

EducationStore.find = function (id) {
  return _forms[id];
};


EducationStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case EducationConstants.GET_FORMS:
      resetForms(payload.forms);
      break;
    case EducationConstants.RECEIVE_FORM:
      addForm(payload.form);
      break;
    case EducationConstants.REMOVE_FORM:
      removeForm(payload.form);
      break;
  }
  this.__emitChange();
};
module.exports = EducationStore;
