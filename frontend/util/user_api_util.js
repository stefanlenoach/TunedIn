
var SessionActions = require('./../actions/session_actions');
var ErrorActions = require('./../actions/error_actions');

var UserApiUtil = {
  signup: function (formData) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: {user: formData},
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
        console.log('UserApiUtil#createAccount error');
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("signup", errors);
      }
    });
  },

  getUsers: function () {
    $.ajax({
      url: '/api/users',
      dataType: 'json',
      method: 'GET',
      success: function (users) {
        SessionActions.receiveUsers(users);
      },
      error: function (xhr) {
        console.log("Error in SessionApiUtil#getUsers error");
      }
    });
  },

  getUser: function (id) {
    $.ajax({
      url: '/api/users/' + id,
      dataType: 'json',
      method: 'GET',
      success: function (user) {
        SessionActions.receiveUser(user);
      },
      error: function (xhr) {
        console.log("Error in SessionApiUtil#getUser error");
      }
    });
  },

  updateCurrentUser: function (usr) {
    $.ajax({
      url: '/api/users/' + usr.id,
      dataType: 'json',
      method: 'PATCH',
      data: { user: {location: usr.location, position: usr.position} },
      success: function (currentUser) {
        SessionActions.updateCurrentUser(currentUser);
      },
      error: function (xhr) {
        console.log("Error in SessionApiUtil#updateCurrentUser error");
      }
    });
  },

  updateImage: function (usr) {
    $.ajax({
      url: '/api/users/' + usr.get('id'),
      dataType: 'json',
      method: 'PATCH',
      processData: false,
      contentType: false,
      data: usr,

      success: function (currentUser) {
        SessionActions.updateCurrentUser(currentUser);
      },
      error: function (xhr) {
        console.log("Error in SessionApiUtil#updateImage error");
      }
    });
  }
};

module.exports = UserApiUtil;
