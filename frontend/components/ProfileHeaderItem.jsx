var React = require('react');
var ProfileApiUtil = require('../util/profile_api_util');
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
var ModalStyle = require('../constants/modal_style');
var ProfileUpdate = require('./ProfileUpdate');
var SessionStore = require('../stores/session_store');

module.exports = React.createClass({
  getInitialState: function () {
    return { modalOpen: false };
  },

  edit: function () {
    this.setState({ modalOpen: true});
  },

  onModalClose: function(){
    this.setState({ modalOpen: false });
  },

  render: function () {
    var user = this.props.user;

    return (
      <div className='profile-header'>
        <div className='pro-pic'></div>
        <div className='pro-text'>
          <div className='pro-name'>{user.first_name + " " + user.last_name}</div>
          <div className='pro-pos'>{user.current_position}</div>
          <div className='pro-loc'>{user.location}</div>
          <button onClick={this.edit}>Edit</button>
        </div>

        <Modal className='modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}>
          <ProfileUpdate close={this.onModalClose} user={user}/>
          <button className='pro-cancel' onClick={this.onModalClose}>Cancel</button>
        </Modal>

      </div>
    );
  }

});
