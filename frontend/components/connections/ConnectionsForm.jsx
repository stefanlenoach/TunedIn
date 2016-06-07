var React = require('react');
var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');

module.exports = React.createClass({
  getInitialState: function () {
    return { status: "Connect" };
  },

  componentDidMount: function () {
    
  },

  componentWillUnmount: function () {

  },

  formConnection: function () {
    var formData1 = {
      connector_id: SessionStore.currentUser().id,
      connectee_id: this.props.userId
    };

    ConnectionApiUtil.createConnection(formData1);

    var formData2 = {
      connector_id: this.props.userId,
      connectee_id: SessionStore.currentUser().id
    };
    ConnectionApiUtil.createConnection(formData2);
  },

  render: function () {
    return (
      <div className='connections-button'>
        <button onClick={this.formConnection}>Connect!</button>
      </div>
    );
  }
});
