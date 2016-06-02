var React = require('react');
var ProfileApiUtil = require('../util/profile_api_util');
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
// var ProfileActions = require('../actions/profile_actions');

module.exports = React.createClass({
  removeExp: function () {
    event.preventDefault();
    ProfileApiUtil.removeExperience(this.props.exp.id);
  },

  editExp: function (event) {
    event.preventDefault();
    var url = "/experiences/" + this.props.exp.id + "/edit";
    hashHistory.push(url);
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

        <button className='remove-exp-btn' onClick={this.removeExp}>
        Delete</button>

        <button className='edit-exp-btn' onClick={this.editExp}>
        Edit</button>
      </div>
    );
  }

});
