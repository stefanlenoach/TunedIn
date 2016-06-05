var React = require('react');
var EducationApiUtil = require('../../util/education_api_util');

module.exports = React.createClass({
  getInitialState: function () {
    return { school: "", degree: "", field_of_study: "", dates_attended: "",
    grade: "", activities: "", description: "" };
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
    EducationApiUtil.createEducation(this.state);
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
