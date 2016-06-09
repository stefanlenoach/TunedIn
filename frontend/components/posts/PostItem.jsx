var React = require('react');
var PostApiUtil = require('../../util/post_api_util');
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
var ModalStyle = require('../../constants/modal_style');
var PostUpdate = require('./PostUpdate');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');

module.exports = React.createClass({
  getInitialState: function () {
    return { modalOpen: false };
  },

  componentDidMount: function () {
    // this.userListener= SessionStore.addListener(this.onChange);
    UserApiUtil.getUsers();
  },

  removePost: function () {
    event.preventDefault();
    PostApiUtil.removePost(this.props.post.id);
  },

  modalOpenEdit: function (event) {
    event.preventDefault();
    this.setState({ modalOpen: true });
  },

  onModalCloseEdit: function() {
    this.setState({ modalOpen: false });
  },

  render: function () {
    var user = SessionStore.find(this.props.post.user_id);
    var mod;

    if (user.id === SessionStore.currentUser().id) {
       mod =  <div class='post-mod'>
                <Modal className='modal'
                  isOpen={this.state.modalOpen}
                  onRequestClose={this.onModalCloseEdit}
                  style={ModalStyle}>
                  <PostUpdate post={this.props.post} close={this.onModalCloseEdit}/>
                  <button className='post-cancel' onClick={this.onModalCloseEdit}>Cancel</button>
                </Modal>
                <div className='post-rmv-edit'>
                  <button className='post-edit-btn' onClick={this.modalOpenEdit}>
                  Edit</button>
                  
                  <button className='post-remove-btn' onClick={this.removePost}>
                  Delete</button>
                </div>
              </div>;
    } else {
      mod = <div></div>;
    }


    return (
      <div className='post-item'>

        <div className= 'post-pic'>
          <img src={user.image_url}/>
        </div>
        <div className='post-item-show'>
          <div className='post-title'>
            {this.props.post.title}
          </div>

          <div className='post-body'>
            {this.props.post.body}
          </div>
          <div className='post-footer'>
            <div className='post-author'>
              {"By: " + user.first_name + " " + user.last_name}
            </div>
            {mod}
          </div>
        </div>

      </div>
    );
  }

});
