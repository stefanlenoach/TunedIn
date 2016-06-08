var React = require('react');
var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');
var ConnectionStore = require('../../stores/connection_store');
var NotificationItem = require('./NotificationItem');

module.exports = React.createClass({

  componentDidMount: function () {
    ConnectionApiUtil.getConnections();
  },

  notificationNumber: function (number) {
    if (number > 0){
      return number;
    } else {
      return null;
    }
  },

  render: function () {
    var connections = ConnectionStore.pendingForAccept(SessionStore.currentUser().id);
    return (
      <div className="notification-icon">
        <button>Notifications <h3 className="badge">{this.notificationNumber(connections.length)}</h3> </button>
        <div className= 'dropdown'>
          <ul>
            {
              connections.map(function(connection){
                return (<NotificationItem key={connection.id} connection={connection} />);
              })
            }
          </ul>
        </div>
      </div>
    );
  }
});
