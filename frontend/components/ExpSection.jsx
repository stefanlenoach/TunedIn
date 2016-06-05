var React = require('react');
var ExpIndex = require('./ExpIndex');
var Modal = require('react-modal');
var ModalStyle = require('../constants/modal_style');
var ExperienceForm = require('./ExperienceForm');
var SessionStore = require('../stores/session_store');


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
      <div className='exp-sec'>
        <h2>Experience</h2>

        <button className='add-exp-btn'
          onClick={this.createForm}>+ Add position</button>&nbsp;

        <div className='exp-items'>
          <ExpIndex user={this.props.user}/>
        </div>

        <Modal className='modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}>
          <ExperienceForm close={this.onModalClose}/>
          <button className='exp-cancel' onClick={this.onModalClose}>Cancel</button>
        </Modal>
      </div>
    );
  }
});
