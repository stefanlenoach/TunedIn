var ProfileActions = require('../actions/profile_actions');

module.exports = {
  getExperiences: function (formData) {
    $.ajax({
      url: '/api/experiences',
      dataType: 'json',
      success: function (forms) {
        ProfileActions.fetchForms(forms);
      },
      error: function (xhr) {
        console.log('ProfileFormApiUtil#createForm error');
      }
    });
  },
  createExperience: function (formData) {
    $.ajax({
      url: '/api/experiences',
      type: 'POST',
      dataType: 'json',
      data: { experience: formData },
      success: function (form) {
        ProfileActions.receiveForm(form);
      },
      error: function (xhr) {

        console.log('ProfileFormApiUtil#createForm error');
      }
    });
  },
  removeExperience: function (id) {
    $.ajax({
      url: '/api/experiences' + id,
      type: 'DELETE',
      success: function (form) {
        ProfileActions.removeForm(form);
      },
      error: function (xhr) {
        console.log('ProfileFormApiUtil#createForm error');
      }
    });
  }

};
