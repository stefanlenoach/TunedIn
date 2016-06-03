var React = require('react');
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
var ModalStyle = require('../constants/modal_style');
var ProfileUpdate = require('./ProfileUpdate');
var SessionStore = require('../stores/session_store');
var UserApiUtil = require('../util/user_api_util');


module.exports = React.createClass({
  getInitialState: function () {
    return { modalOpen: false,
             imageFile: null,
             imageUrl: null };
  },

  edit: function () {
    this.setState({ modalOpen: true});
  },

  onModalClose: function(){
    this.setState({ modalOpen: false });
  },

  updateFile: function(event) {
    var file = event.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
      debugger
      var data = {imageFile: this.state.imageFile, imageUrl: this.state.imageUrl};
      UserApiUtil.updateCurrentUser(data);
      this.forceUpdate();
    }
  },

  render: function () {
    var user = this.props.user;
    return (
      <div className='profile-header'>
        <div className='pro-pic'>
          <input type='file' onChange={this.updateFile}/>
          <img src={this.state.imageUrl}/>
        </div>


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
