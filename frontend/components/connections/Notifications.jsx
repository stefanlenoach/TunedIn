var React = require('react');
var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');
var ConnectionStore = require('../../stores/connection_store');
var NotificationItem = require('./NotificationItem');

module.exports = React.createClass({
  getInitialState: function () {
    return {pending: undefined};
  },

  componentDidMount: function () {
    this.notiListener = ConnectionStore.addListener(this.onChange);
    ConnectionApiUtil.getConnections();
  },

  componentWillUnmount: function () {
    this.notiListener.remove();
  },

  onChange: function () {
    this.setState({ pending: ConnectionStore.allPending(SessionStore.currentUser().id) });
  },

  notificationNumber: function (number) {
    if (number > 0){
      return number;
    } else {
      return null;
    }
  },

  render: function () {
    var connections = this.state.pending;
    if (connections === undefined) {
      return (<div></div>);
    } else {

      return (
        <div className="notification-icon">
          <div>Notifications <h3 className="badge">{this.notificationNumber(connections.length)}</h3> </div>
          <ul className= 'dropdown'>
            {
              connections.map(function(connection){
                return (<NotificationItem key={connection.id} connection={connection} />);
              })
            }
          </ul>
        </div>
      );
    }
  }
});
