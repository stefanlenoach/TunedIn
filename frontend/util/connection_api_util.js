var ConnectionActions = require('../actions/connection_actions');

module.exports = {
  getConnections: function (formData) {
    $.ajax({
      url: '/api/connections',
      dataType: 'json',
      success: function (forms) {
        ConnectionActions.fetchForms(forms);
      }
    });
  },

  getConnection: function (id) {
    $.ajax({
      url: '/api/connections/' + id,
      dataType: 'json',
      success: function (forms) {
        ConnectionActions.receiveForm(forms);
      }
    });
  },

  createConnection: function (formData) {

    $.ajax({
      url: '/api/connections',
      type: 'POST',
      dataType: 'json',
      data: { connection: formData },
      success: function (form) {
        ConnectionActions.receiveForm(form);
      }
    });
  },

  updateConnection: function (formData) {
    $.ajax({
      url: '/api/connections/' + formData.id,
      dataType: 'json',
      type: 'PATCH',
      data: { connection: formData },

      success: function (form) {
        ConnectionActions.receiveForm(form);
      }
    });
  },

  removeConnection: function (id) {
    $.ajax({
      url: '/api/connections/' + id,
      type: 'DELETE',
      success: function (form) {
        ConnectionActions.removeForm(form);
      }
    });
  },
};
