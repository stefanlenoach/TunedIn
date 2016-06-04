var React = require('react');
var Link = require('react-router').Link;
require('react-addons-linked-state-mixin');
var ExperienceForm = require('./ExperienceForm');
var ProfileStore = require('../stores/profile_store');
var ErrorStore = require('../stores/error_store');
var ProfileApiUtil = require('../util/profile_api_util');
var SessionStore = require('../stores/session_store');
var SessionApiUtil = require('../util/session_api_util');
var ExpIndex = require('./ExpIndex');
var Modal = require('react-modal');
var ModalStyle = require('../constants/modal_style');
var ProfileHeaderItem = require('./ProfileHeaderItem');

module.exports = React.createClass ({
  getInitialState: function () {
    return({ modalOpen: false});
  },

  componentDidMount: function () {
    this.headerListener = SessionStore.addListener(this.onChange);
  },

  componentWillUnmount: function () {
    this.headerListener.remove();
  },

  onChange: function () {
    this.forceUpdate();
  },

  createExp: function () {
    this.setState({ modalOpen: true});
  },

  onModalClose: function(){
    this.setState({ modalOpen: false });
  },

  render: function () {
    var user = SessionStore.currentUser();

    return (
      <div className='profile'>

        <div className='profile-main'>
          <ProfileHeaderItem user={user}/>
        </div>

        <div className='exp-sec'>
          <h2>Experience</h2>

          <button className='add-exp-btn'
            onClick={this.createExp}>+ Add position</button>&nbsp;

          <div className='exp-items'>
            <ExpIndex user={user}/>
          </div>

          <Modal className='modal'
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}>
            <ExperienceForm close={this.onModalClose}/>
            <button className='exp-cancel' onClick={this.onModalClose}>Cancel</button>
          </Modal>
        </div>

      </div>
    );
  }

});
