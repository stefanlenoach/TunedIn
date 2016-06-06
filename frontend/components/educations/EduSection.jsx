var React = require('react');
var EduIndex = require('./EduIndex');
var EduForm = require('./EduForm');
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
      <div className='edu-sec'>
        <h2>Education</h2>

        <button className='add-edu-btn'
          onClick={this.createForm}>+ Add education</button>&nbsp;

        <div className='edu-items'>
          <EduIndex user={this.props.user}/>
        </div>

        <Modal className='modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}>
          <EduForm close={this.onModalClose}/>
          <button className='edu-cancel' onClick={this.onModalClose}>Cancel</button>
        </Modal>

      </div>
    );
  }
});
