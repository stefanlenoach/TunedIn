var React = require('react');
var Link = require('react-router').Link;
require('react-addons-linked-state-mixin');
var SessionApiUtil = require('./../util/session_api_util');
var SessionStore = require('./../stores/session_store');
var ErrorStore = require('./../stores/error_store');
var UserApiUtil = require('./../util/user_api_util');

module.exports = React.createClass ({
  render: function () {
    return (
      <div>
      <h2>Hi, {SessionStore.currentUser().first_name}!</h2>
      <input type="submit" value="logout" onClick={ SessionApiUtil.logout } />
      </div>
    );
  }

});
