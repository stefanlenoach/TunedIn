var React = require('react');
var Link = require('react-router').Link;
require('react-addons-linked-state-mixin');
var ExperienceForm = require('./ExperienceForm');
var ProfileStore = require('../stores/profile_store');
var ErrorStore = require('../stores/error_store');
var ProfileApiUtil = require('../util/profile_api_util');

module.exports = React.createClass ({
  getInitialState: function () {
    return {forms: [] };
  },

  componentDidMount: function () {
    this.formListener = ProfileStore.addListener(this.onChange);
    this.setState( {forms: ProfileStore.all() } );
  },

  componentWillUnmount: function () {
    this.formListener.remove();
  },

  render: function () {
    return (
      <div>
      <h2>Hi, {SessionStore.currentUser().first_name}!</h2>
      <input type="submit" value="logout" onClick={ SessionApiUtil.logout } />
      </div>
    );
  }

});
