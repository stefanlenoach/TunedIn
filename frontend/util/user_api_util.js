
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
      }
    });
  }
};

module.exports = UserApiUtil;
