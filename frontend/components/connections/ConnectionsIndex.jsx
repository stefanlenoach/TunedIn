var React = require('react');
var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');
var ConnectionStore = require('../../stores/connection_store');
var ConnectionItem = require('./ConnectionItem');
module.exports = React.createClass({

  componentDidMount: function () {
    ConnectionApiUtil.getConnections();
  },

  render: function () {
    var connections = ConnectionStore.allConnected(SessionStore.currentUser().id);
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
});
