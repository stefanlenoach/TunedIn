
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

  updateCurrentUser: function (usr) {
    $.ajax({
      url: '/api/users/' + usr.id,
      dataType: 'json',
      method: 'PATCH',
      data: { user: { location: usr.location, current_position: usr.position,
                      imageFile: usr.imageFile, imageUrl: usr.imageUrl} },

      success: function (currentUser) {
        SessionActions.updateCurrentUser(currentUser);
      },
      error: function (xhr) {
        console.log("Error in SessionApiUtil#updateCurrentUser error");
      }
    });
  }
};

module.exports = UserApiUtil;
