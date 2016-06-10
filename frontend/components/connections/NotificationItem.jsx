var React = require('react');
var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');
var ConnectionStore = require('../../stores/connection_store');

module.exports = React.createClass({
  getInitialState: function () {
    return { connection: "" };
  },

  componentDidMount: function () {
    this.connectionListener = ConnectionStore.addListener(this.onChange);
    ConnectionApiUtil.getConnections();
    UserApiUtil.getUsers();
  },

  componentWillUnmount: function () {
    this.connectionListener.remove();
  },

  onChange: function () {
    this.forceUpdate();
  },

  acceptRequest: function () {
    var formData = {
      id: this.props.connection.id,
      connector_id: this.props.connection.connector_id,
      connectee_id: this.props.connection.connectee_id,
      status: "connected"
    };
    ConnectionApiUtil.updateConnection(formData);
  },

  declineRequest: function () {
    ConnectionApiUtil.removeConnection(this.props.connection.id);
  },

  render: function () {
    var user = SessionStore.find(this.props.connection.connector_id);
    return (
      <div className="notification-item">
        <h2>{user.first_name + " " + user.last_name + " wants to connect with you"} </h2>
        <div className='noti-buttons'>
          <button className="noti-accept" onClick={this.acceptRequest}>Accept</button>&nbsp;&nbsp;
          <button className="noti-decline" onClick={this.declineRequest}>Decline</button>
        </div>
      </div>
    );
  }
});
