var EducationActions = require('../actions/education_actions');

module.exports = {
  getEducations: function (formData) {
    $.ajax({
      url: '/api/educations',
      dataType: 'json',
      success: function (forms) {
        EducationActions.fetchForms(forms);
      },
      error: function (xhr) {
        console.log('EducationFormApiUtil#createEdu error');
      }
    });
  },

  getEducation: function (id) {
    $.ajax({
      url: '/api/educations/' + id,
      dataType: 'json',
      success: function (forms) {
        EducationActions.receiveForm(forms);
      },
      error: function (xhr) {
        console.log('EducationFormApiUtil#getEdu error');
      }
    });
  },

  createEducation: function (formData) {
    $.ajax({
      url: '/api/educations',
      type: 'POST',
      dataType: 'json',
      data: { education: formData },
      success: function (form) {
        EducationActions.receiveForm(form);
      },
      error: function (xhr) {
        console.log('EducationFormApiUtil#createEdu error');
      }
    });
  },

  updateEducation: function (formData) {
    $.ajax({
      url: '/api/educations/' + formData.id,
      dataType: 'json',
      type: 'PATCH',
      data: { education: { user_id: formData.user_id,
                           school: formData.school,
                           degree: formData.degree,
                           field_of_study: formData.field_of_study,
                           dates_attended: formData.dates_attended,
                           grade: formData.grade,
                           activities: formData.activities,
                           description: formData.description } },

      success: function (form) {
        EducationActions.receiveForm(form);
      },
      error: function (xhr) {
        console.log('EducationFormApiUtil#updateEdu error');
      }
    });
  },

  removeEducation: function (id) {
    $.ajax({
      url: '/api/educations/' + id,
      type: 'DELETE',
      success: function (form) {
        EducationActions.removeForm(form);
      },
      error: function (xhr) {
        console.log('EducationFormApiUtil#deleteEdu error');
      }
    });
  },
};
