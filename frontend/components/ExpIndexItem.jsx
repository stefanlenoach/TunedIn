var React = require('react');
var ProfileApiUtil = require('../util/profile_api_util');

module.exports = React.createClass({
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
      </div>
    );
  }

});
