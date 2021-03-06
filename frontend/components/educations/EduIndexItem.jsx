var React = require('react');
var EducationApiUtil = require('../../util/education_api_util');
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
var ModalStyle = require('../../constants/modal_style');
var EduUpdate = require('./EduUpdate');

module.exports = React.createClass({
  getInitialState: function () {
    return { modalOpen: false };
  },

  removeEdu: function () {
    event.preventDefault();
    EducationApiUtil.removeEducation(this.props.edu.id);
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
      <div className='edu-item-show'>
        <div className='edu-school'>
          {this.props.edu.school}
        </div>

        <div className='edu-degree'>
          {this.props.edu.degree}
        </div>

        <div className='edu-field-of-study'>
          {this.props.edu.field_of_study}
        </div>

        <div className='edu-dates-attended'>
          {this.props.edu.dates_attended}
        </div>

        <div className='edu-description'>
          {this.props.edu.description}
        </div>

        <div className='edu-grade'>
          <strong>GPA:</strong> {this.props.edu.grade}
        </div>

        <div className='edu-activities'>
          <strong>Activities and Societies:</strong> {this.props.edu.activities}
        </div>

        <Modal className='modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalCloseEdit}
          style={ModalStyle}>
          <EduUpdate edu={this.props.edu} close={this.onModalCloseEdit}/>
          <button className='edu-cancel' onClick={this.onModalCloseEdit}>Cancel</button>
        </Modal>
        <div className='edu-rmv-edit'>
          <button className='edu-remove-btn' onClick={this.removeEdu}>
          Delete</button>

          <button className='edu-edit-btn' onClick={this.modalOpenEdit}>
          Edit</button>
        </div>
      </div>
    );
  }

});
