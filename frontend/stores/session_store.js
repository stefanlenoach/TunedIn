var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var SessionConstants = require('../constants/session_constants');


var SessionStore = new Store(AppDispatcher);

var _currentUser = {},
    _currentUserHasBeenFetched = false;

var _users = {};

function resetUsers(users) {
    _users = {};

    users.forEach(function(user) {
      _users[user.id] = user;
    });
}

function _login(currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
}

function _logout() {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
}

SessionStore.all = function () {
  return Object.keys(_users).map(function(userId){
    return _users[userId];
  });
};

SessionStore.currentUser = function () {
  return $.extend({}, _currentUser);
};

SessionStore.currentUserHasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};

SessionStore.isUserLoggedIn = function () {
  return !!_currentUser.id;
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
    	_logout();
      SessionStore.__emitChange();
      break;
    case SessionConstants.UPDATE:
      _currentUser = payload.currentUser;
      SessionStore.__emitChange();
      break;
    case SessionConstants.GET_USERS:
      resetUsers(payload.users);
      SessionStore.__emitChange();
      break;
  }
};


module.exports = SessionStore;
