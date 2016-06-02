var React = require('react');
var AppDispatcher = require('../dispatcher/dispatcher');
var ProfileStore = require('../stores/profile_store');
var ProfileApiUtil = require('../util/profile_api_util');
var ProfileConstants = require('../constants/profile_constants');


module.exports = {

  fetchForms: function (forms) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.GET_FORMS,
      forms: forms
    });
  },

  receiveForm: function (form) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.CREATE_FORM,
      form: form
    });
  },

  removeForm: function (form) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.REMOVE_FORM,
      form: form
    });
  }
};
