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

  getExperience: function (id) {
    $.ajax({
      url: '/api/experiences/' + id,
      dataType: 'json',
      success: function (forms) {
        ProfileActions.receiveForm(forms);
      },
      error: function (xhr) {
        console.log('ProfileFormApiUtil#getForm error');
      }
    });
  },

  createExperience: function (formData) {
    debugger
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
      },
      error: function (xhr) {
        console.log('ProfileFormApiUtil#updateForm error');
      }
    });
  },

  removeExperience: function (id) {
    $.ajax({
      url: '/api/experiences/' + id,
      type: 'DELETE',
      success: function (form) {
        ProfileActions.removeForm(form);
      },
      error: function (xhr) {
        console.log('ProfileFormApiUtil#deleteForm error');
      }
    });
  }

};
