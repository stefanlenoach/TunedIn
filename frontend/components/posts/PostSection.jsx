var React = require('react');
var PostIndex = require('./PostIndex');
var PostForm = require('./PostForm');
var SessionStore = require('../../stores/session_store');
var Modal = require('react-modal');
var ModalStyle = require('../../constants/modal_style');

module.exports = React.createClass({
  getInitialState: function () {
    return({ modalOpen: false });
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

  createForm: function () {
    this.setState({ modalOpen: true});
  },

  onModalClose: function(){
    this.setState({ modalOpen: false });
  },

  render: function () {
    return (
      <div className='post-sec'>

        <button className='add-post-btn'
          onClick={this.createForm}> + Publish a post</button>&nbsp;

        <div className='post-items'>
          <PostIndex/>
        </div>

        <Modal className='modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}>
          <PostForm close={this.onModalClose}/>
          <button className='post-cancel' onClick={this.onModalClose}>Cancel</button>
        </Modal>

      </div>
    );
  }
});
