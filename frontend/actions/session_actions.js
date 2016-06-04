
var SessionConstants = require('../constants/session_constants');
var SessionApiUtil = require('../util/session_api_util');
var SessionStore = require('../stores/session_store');
var AppDispatcher = require('../dispatcher/dispatcher');

var SessionActions = {

  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  receiveUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.GET_USERS,
      users: users
    });
  },

  removeCurrentUser: function () {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  },

  updateCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.UPDATE,
      currentUser: currentUser
    });
  }

};

module.exports = SessionActions;
