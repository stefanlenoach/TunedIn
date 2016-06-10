var React = require('react');
var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');
var ConnectionStore = require('../../stores/connection_store');
var ConnectionItem = require('./ConnectionItem');
module.exports = React.createClass({
  getInitialState: function () {
    return { connections: ""};
  },

  componentDidMount: function () {
    this.connectionsListener = ConnectionStore.addListener(this.onChange);
    ConnectionApiUtil.getConnections();
  },

  componentWillUnmount: function () {
    this.connectionsListener.remove();
  },

  onChange: function () {
    this.setState({ connections: ConnectionStore.allConnected(SessionStore.currentUser().id)});
  },

  render: function () {
    var connections = this.state.connections;
    if (!connections) {
      return <div></div>;
    } else {

      return (
        <div>
        {
          connections.map(function(connection){
            return (<ConnectionItem key={connection.id} connection={connection} />);
          })
        }
        </div>
      );
    }
  }
});
