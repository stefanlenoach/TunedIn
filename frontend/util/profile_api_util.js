var ProfileActions = require('../actions/profile_actions');

module.exports = {
  getExperiences: function (formData) {
    $.ajax({
      url: '/api/experiences',
      dataType: 'json',
      success: function (forms) {
        ProfileActions.fetchForms(forms);
      }
    });
  },

  getExperience: function (id) {
    $.ajax({
      url: '/api/experiences/' + id,
      dataType: 'json',
      success: function (forms) {
        ProfileActions.receiveForm(forms);
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
      }
    });
  },

  updateExperience: function (formData) {
    $.ajax({
      url: '/api/experiences/' + formData.id,
      dataType: 'json',
      type: 'PATCH',
      data: { experience: { user_id: formData.user_id,
                            company_name: formData.company_name,
                            title: formData.title,
                            location: formData.location,
                            description: formData.description } },

      success: function (form) {
        ProfileActions.receiveForm(form);
      }
    });
  },

  removeExperience: function (id) {
    $.ajax({
      url: '/api/experiences/' + id,
      type: 'DELETE',
      success: function (form) {
        ProfileActions.removeForm(form);
      }
    });
  },

};
