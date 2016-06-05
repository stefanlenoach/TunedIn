var React = require('react');
var EducationApiUtil = require('../util/education_api_util');
var EducationStore = require('../stores/education_store');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  getInitialState: function () {
    var potEdu = EducationStore.find(this.props.exp.id);
    var edu = potEdu ? potEdu : {};
    return {id: edu.id, user_id: edu.user_id, school: edu.school, degree: edu.degree,
            field_of_study: edu.field_of_study, dates_attended: edu.dates_attended,
            grade: edu.grade, activities: edu.activities, description: edu.description};
  },

  componentDidMount: function () {
    this.eduListener = EducationStore.addListener(this.handleChange);
    EducationApiUtil.getEduerience(parseInt(this.props.edu.id));
  },

  componentWillUnmount: function () {
    this.eduListener.remove();
  },

  handleChange: function () {
    var potEdu = EducationStore.find(this.props.edu.id);
    var edu = potEdu ? potEdu : {};
    this.setState({id: edu.id, user_id: edu.user_id, school: edu.school, degree: edu.degree,
            field_of_study: edu.field_of_study, dates_attended: edu.dates_attended,
            grade: edu.grade, activities: edu.activities, description: edu.description});
  },

  changeSchool: function (event) {
    var scho = event.target.value;
    this.setState({school: scho});
  },

  changeDegree: function (event) {
    var deg = event.target.value;
    this.setState({degree: deg});
  },

  changeFieldOfStudy: function (event) {
    var field = event.target.value;
    this.setState({field_of_study: field});
  },

  changeDatesAttended: function (event) {
    var dates = event.target.value;
    this.setState({dates_attended: dates});
  },

  changeGrade: function (event) {
    var gra = event.target.value;
    this.setState({grade: gra});
  },

  changeActivities: function (event) {
    var act = event.target.value;
    this.setState({activities: act});
  },

  changeDescription: function (event) {
    var desc = event.target.value;
    this.setState({description: desc});
  },

  handleSubmit: function (event) {
    event.preventDefault();
    EducationApiUtil.updateEducation(this.state);
    this.props.close();
  },

  render: function () {
    return (
      <form className='exp-form' onSubmit={this.handleSubmit}>
        <label className = 'exp-label'>School *</label>
        <br/>
        <input
        type='text' className = 'exp-input'
        value={this.state.company}
        onChange={this.changeSchool}/><br/>

        <label className = 'exp-label'>Degree</label>
        <br/>
        <input
        type='text' className = 'exp-input'
        value={this.state.degree}
        onChange={this.changeDegree}/><br/><br/>

        <label className = 'exp-label'>Field of Study</label>
        <br/>
        <input
        type='text' className = 'exp-input'
        value={this.state.field_of_study}
        onChange={this.changeFieldOfStudy}/><br/>

        <label className = 'exp-label'>Dates Attended</label>
        <br/>
        <input
        type='text' className = 'exp-input'
        value={this.state.dates_attended}
        onChange={this.changeDatesAttended}/><br/>

        <label className = 'exp-label'>Grade</label>
        <br/>
        <input
        type='text' className = 'exp-input'
        value={this.state.grade}
        onChange={this.changeGrade}/><br/>

        <label className = 'exp-label'>Activities</label>
        <br/>
        <textarea className = 'exp-txt-area'
        value={this.state.activities}
        onChange={this.changeActivities}/><br/>

        <label className = 'exp-label'>Description</label>
        <br/>
        <textarea className = 'exp-txt-area'
        value={this.state.description}
        onChange={this.changeDescription}/><br/>

        <input
        type="submit" className = 'exp-submit'
        value="Save"/>
      </form>
    );
  }
});
