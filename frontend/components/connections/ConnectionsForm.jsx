var React = require('react');
var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');

module.exports = React.createClass({

  formConnection: function () {
    var formData1 = {
      connector_id: SessionStore.currentUser().id,
      connectee_id: this.props.userId
    };
    ConnectionApiUtil.createConnection(formData1);
  },

  render: function () {
    var user = SessionStore.find(this.props.userId);
    if (!user) {
      return <div></div>;
    }
      return (
        <div className='connections-button'>
        <button onClick={this.formConnection}>Connect</button>
        <h1>{user.connection_status}</h1>
        </div>
      );
  }
});
