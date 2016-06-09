var React = require('react');
var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');
var ConnectionStore = require('../../stores/connection_store');

module.exports = React.createClass({

  componentDidMount: function () {
    this.connectionListener = ConnectionStore.addListener(this.onChange);
    ConnectionApiUtil.getConnections();
  },

  componentWillUnmount: function () {
    this.connectionListener.remove();
  },

  onChange: function () {
    this.forceUpdate();
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
    var id = ConnectionStore.findByIds(SessionStore.currentUser().id, this.props.userId);
    var formData = {
      id: id,
      connector_id: SessionStore.currentUser().id,
      connectee_id: this.props.userId,
      status: "connected"
    };
    ConnectionApiUtil.updateConnection(formData);
  },

  removeConnection: function() {
    ConnectionApiUtil.removeConnection(this.props.connection.id);
  },

  render: function () {
    var user = SessionStore.find(this.props.userId);
    if (!user) {
      return <div></div>;
    }
    if (user.connection_status === "false"){
      return (
        <div className='connections-button'>
          <button onClick={this.formConnection}>Connect</button>
        </div>
      );
    } else if (user.connection_status[0] === "pending" && user.connection_status[1] === "requested"){
      return (
        <div className='connections-button'>
          <button onClick={this.acceptConnection}>Accept?</button>
        </div>
      );
    } else if (user.connection_status[0] === "pending" && user.connection_status[1] === "received"){
      return (
        <div className='connections-button'>
          <button>Pending</button>
        </div>
      );
    } else if (user.connection_status[0] === "connected") {
      return (
        <div className='connections-button'>
          <button onClick={this.removeConnection}>Disconnect</button>
        </div>
      );
    } else {
      return (<h1>PROBLEM</h1>);
    }
  }
});
