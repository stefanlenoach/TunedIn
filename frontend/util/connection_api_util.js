var ConnectionActions = require('../actions/connection_actions');

module.exports = {
  getConnections: function (formData) {
    $.ajax({
      url: '/api/connections',
      dataType: 'json',
      success: function (forms) {
        ConnectionActions.fetchForms(forms);
      },
      error: function (xhr) {
        console.log('ConnectionFormApiUtil#createConnection error');
      }
    });
  },

  getConnection: function (id) {
    $.ajax({
      url: '/api/connections/' + id,
      dataType: 'json',
      success: function (forms) {
        ConnectionActions.receiveForm(forms);
      },
      error: function (xhr) {
        console.log('ConnectionFormApiUtil#getConnection error');
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
      },
      error: function (xhr) {
        console.log('ConnectionFormApiUtil#createConnection error');
      }
    });
  },

  updateConnection: function (formData) {
    $.ajax({
      url: '/api/connections/' + formData.id,
      dataType: 'json',
      type: 'PATCH',
      data: { connection: { status: formData.status} },

      success: function (form) {
        ConnectionActions.receiveForm(form);
      },
      error: function (xhr) {
        console.log('ConnectionFormApiUtil#updateConnection error');
      }
    });
  },

  removeConnection: function (id) {
    $.ajax({
      url: '/api/connections/' + id,
      type: 'DELETE',
      success: function (form) {
        ConnectionActions.removeForm(form);
      },
      error: function (xhr) {
        console.log('ConnectionFormApiUtil#deleteConnection error');
      }
    });
  },
};
