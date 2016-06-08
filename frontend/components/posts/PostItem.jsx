var React = require('react');
var PostApiUtil = require('../../util/post_api_util');
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
var ModalStyle = require('../../constants/modal_style');
var PostUpdate = require('./PostUpdate');

module.exports = React.createClass({
  getInitialState: function () {
    return { modalOpen: false };
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
    return (
      <div>
        <div className='post-item-show'>
          <div className='post-title'>
            {this.props.post.title}
          </div>

          <div className='post-body'>
            {this.props.post.body}
          </div>
        </div>
        
        <Modal className='modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalCloseEdit}
          style={ModalStyle}>
          <PostUpdate post={this.props.post} close={this.onModalCloseEdit}/>
          <button className='post-cancel' onClick={this.onModalCloseEdit}>Cancel</button>
        </Modal>
        <div className='post-rmv-edit'>
          <button className='post-remove-btn' onClick={this.removePost}>
          Delete</button>

          <button className='post-edit-btn' onClick={this.modalOpenEdit}>
          Edit</button>
        </div>
      </div>
    );
  }

});
