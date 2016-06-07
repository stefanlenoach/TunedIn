var React = require('react');
var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');

module.exports = React.createClass({

  formConnection: function () {
    var formData1 = {
      connector_id: SessionStore.currentUser().id,
      connectee_id: this.props.userId
    };

    ConnectionApiUtil.createConnection(formData1);
  },

  render: function () {
      return (
        <div className='connections-button'>
        <button onClick={this.formConnection}>Connect!</button>
        </div>
      );
  }
});
