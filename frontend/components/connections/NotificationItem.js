var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');
var ConnectionStore = require('../../stores/connection_store');

module.exports = React.createClass({displayName: "exports",
  getInitialState: function () {
    return { connection: undefined };
  },

  componentDidMount: function () {
    this.connectionListener = ConnectionStore.addListener(this.onChange);
  },

  componentWillUnmount: function () {
    this.connectionListener.remove();
  },

  onChange: function () {
    this.setState({connection:  ConnectionStore.findByIds(this.props.connection.connector_id, SessionStore.currentUser().id) });
  },

  acceptRequest: function () {
    var formData = {
      id: this.state.connection.id,
      connector_id: this.state.connection.connector_id,
      connectee_id: this.state.connection.connectee_id,
      status: "connected"
    };
    ConnectionApiUtil.updateConnection(formData);
  },

  declineRequest: function () {
    ConnectionApiUtil.removeConnection(this.state.connection.id);
  },

  render: function () {
    var user = SessionStore.find(this.props.connection.connector_id);
    if (!user) {
      return (React.createElement("div", null));
    }
    return (
      React.createElement("div", {className: "notification-item"}, 
        React.createElement("h2", null, user.first_name + " " + user.last_name + " wants to connect with you", " "), 
        React.createElement("div", {className: "noti-buttons"}, 
          React.createElement("button", {className: "noti-accept", onClick: this.acceptRequest}, "Accept"), "  ", 
          React.createElement("button", {className: "noti-decline", onClick: this.declineRequest}, "Decline")
        )
      )
    );
  }
});