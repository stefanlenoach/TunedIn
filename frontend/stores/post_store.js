var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var PostConstants = require('../constants/post_constants');

var PostStore = new Store(AppDispatcher);

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

PostStore.all = function () {
  return Object.keys(_forms).map(function (formId){
    return _forms[formId];
  });
};

PostStore.find = function (id) {
  return _forms[id];
};


PostStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case PostConstants.GET_POSTS:
      resetForms(payload.posts);
      this.__emitChange();
      break;
    case PostConstants.RECEIVE_POST:
      addForm(payload.post);
      this.__emitChange();
      break;
    case PostConstants.REMOVE_POST:
      removeForm(payload.post);
      this.__emitChange();
      break;
  }
};

module.exports = PostStore;
