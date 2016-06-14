var SessionActions = require('./../actions/session_actions');
var ErrorActions = require('./../actions/error_actions');

var SessionApiUtil = {
	login: function (credentials) {
		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: {user: credentials},
			success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      }
		});
	},

	logout: function () {
		$.ajax({
			url: '/api/session',
			method: 'delete',
			success: function () {
        SessionActions.removeCurrentUser();
      }
		});
	},

	fetchCurrentUser: function (complete) {
		$.ajax({
			url: '/api/session',
			method: 'GET',
			success: function (currentUser) {
			  SessionActions.receiveCurrentUser(currentUser);
			}
      complete: complete
		});
	}

};

module.exports = SessionApiUtil;
