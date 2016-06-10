var React = require('react');
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
var ModalStyle = require('../../constants/modal_style_header');
var ProfileUpdate = require('./ProfileUpdate');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');


module.exports = React.createClass({
  getInitialState: function () {
    return { modalOpen: false,
             imageFile: null,
             imageUrl: null
           };
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
      var formData = new FormData();
      formData.append("id", this.props.user.id);
      formData.append("user[image]", file);
      UserApiUtil.updateImage(formData);
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }

    this.forceUpdate();
  },

  render: function () {
    var user = this.props.user;
    return (
      <div className='profile-header'>
        <div className='pro-pic'>
          <input className='pic-upload' type='file' onChange={this.updateFile}/>
          <div className='pic-container'>
            <img src={user.image_url}/>
          </div>
        </div>


        <div className='pro-text'>
          <div className='pro-name'>{user.first_name + " " + user.last_name}</div>
          <div className='pro-pos'>{user.current_position}</div>
          <div className='pro-loc'>{user.location}</div>
          <button className='pro-edit' onClick={this.edit}>Edit</button>
        </div>

        <Modal className='modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}>
          <ProfileUpdate close={this.onModalClose} user={user}/>
          <button className='profile-cancel' onClick={this.onModalClose}>Cancel</button>
        </Modal>

      </div>
    );
  }

});
