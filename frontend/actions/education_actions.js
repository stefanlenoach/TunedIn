var React = require('react');
var AppDispatcher = require('../dispatcher/dispatcher');
var EducationStore = require('../stores/education_store');
var EducationApiUtil = require('../util/education_api_util');
var EducationConstants = require('../constants/education_constants');


module.exports = {

  fetchForms: function (forms) {
    AppDispatcher.dispatch({
      actionType: EducationConstants.GET_FORMS,
      forms: forms
    });
  },

  receiveForm: function (form) {
    AppDispatcher.dispatch({
      actionType: EducationConstants.RECEIVE_FORM,
      form: form
    });
  },

  removeForm: function (form) {
    AppDispatcher.dispatch({
      actionType: EducationConstants.REMOVE_FORM,
      form: form
    });
  }
};
