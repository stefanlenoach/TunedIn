var React = require('react');
var ProfileApiUtil = require('../util/profile_api_util');
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
var ModalStyle = require('../constants/modal_style');
// var ProfileActions = require('../actions/profile_actions');
var ExpUpdate = require('./ExpUpdate');

module.exports = React.createClass({
  getInitialState: function () {
    return { modalOpen: false };
  },

  removeExp: function () {
    event.preventDefault();
    ProfileApiUtil.removeExperience(this.props.exp.id);
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
      <div className='exp-item-show'>
        <div className='exp-title'>
          {this.props.exp.title}
        </div>

        <div className='exp-company-name'>
          {this.props.exp.company_name}
        </div>

        <div className='exp-location'>
          {this.props.exp.location}
        </div>

        <div className='exp-description'>
          {this.props.exp.description}
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalCloseEdit}
          style={ModalStyle}>
          <ExpUpdate exp={this.props.exp} close={this.onModalCloseEdit}/>
          <button className='exp-cancel' onClick={this.onModalCloseEdit}>Cancel</button>
        </Modal>
        <div className='exp-rmv-edit'>
          <button className='exp-remove-btn' onClick={this.removeExp}>
          Delete</button>

          <button className='exp-edit-btn' onClick={this.modalOpenEdit}>
          Edit</button>
        </div>
      </div>
    );
  }

});
