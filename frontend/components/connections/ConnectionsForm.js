var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');
var ConnectionStore = require('../../stores/connection_store');

module.exports = React.createClass({displayName: "exports",
  getInitialState: function () {
    return { connection: "" };
  },

  componentDidMount: function () {
    this.connectionListener = ConnectionStore.addListener(this.onChange);
    ConnectionApiUtil.getConnections();
  },

  componentWillUnmount: function () {
    this.connectionListener.remove();
  },

  onChange: function () {
    this.setState({connection:  ConnectionStore.findByIds(SessionStore.currentUser().id, this.props.userId) });
  },

  formConnection: function () {
    var formData = {
      connector_id: SessionStore.currentUser().id,
      connectee_id: this.props.userId
    };
    ConnectionApiUtil.createConnection(formData);
    this.forceUpdate();
  },

  acceptConnection: function () {
    var connection = ConnectionStore.findByIds(SessionStore.currentUser().id, this.props.userId);
    var formData = {
      id: connection.id,
      connector_id: SessionStore.currentUser().id,
      connectee_id: this.props.userId,
      status: "connected"
    };
    ConnectionApiUtil.updateConnection(formData);
  },

  removeConnection: function() {
    ConnectionApiUtil.removeConnection(this.state.connection.id);
  },

  render: function () {
    var user = SessionStore.find(this.props.userId);
    if (!user) {
      return React.createElement("div", null);
    }
    if (this.state.connection === undefined){
      return (
        React.createElement("div", {className: "connections-button"}, 
          React.createElement("button", {onClick: this.formConnection}, "Connect")
        )
      );
    } else if (this.state.connection.connection_status === undefined) {
      return (
        React.createElement("div", {className: "connections-button"}, 
          React.createElement("button", null, "Pending")
        )
      );
    }
    else if (this.state.connection.connection_status[0] === "pending" && this.state.connection.connection_status[1] === "received"){
      return (
        React.createElement("div", {className: "connections-button"}, 
          React.createElement("button", {onClick: this.acceptConnection}, "Accept?")
        )
      );
    } else if (this.state.connection.connection_status[0] === "pending" && this.state.connection.connection_status[1] === "requested"){
      return (
        React.createElement("div", {className: "connections-button"}, 
          React.createElement("button", null, "Pending")
        )
      );
    } else if (this.state.connection.connection_status[0] === "connected") {
      return (
        React.createElement("div", {className: "connections-button"}, 
          React.createElement("button", {onClick: this.removeConnection}, "Disconnect")
        )
      );
    } else {
      return (React.createElement("h1", null, "PROBLEM"));
    }
  }
});