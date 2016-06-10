var React = require('react');

module.exports = React.createClass({
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
      </div>
    );
  }

});
