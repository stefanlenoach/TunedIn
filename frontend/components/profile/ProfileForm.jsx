var React = require('react');
var Link = require('react-router').Link;
require('react-addons-linked-state-mixin');

var ProfileStore = require('../../stores/profile_store');
var ErrorStore = require('../../stores/error_store');
var SessionStore = require('../../stores/session_store');

var ExpSection = require('../experiences/ExpSection');
var EduSection = require('../educations/EduSection');
var ProfileHeaderItem = require('./ProfileHeaderItem');

module.exports = React.createClass ({
  getInitialState: function () {
    return {currentUser: SessionStore.currentUser() };
  },

  componentDidMount: function () {
    this.profileListener = SessionStore.addListener(this.onChange);
  },

  componentWillUnmount: function () {
    this.profileListener.remove();
  },

  onChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  render: function () {
    var user = SessionStore.currentUser();
    return (
      <div className='profile'>

        <ProfileHeaderItem user={user}/>
        <ExpSection user={user}/> <br/>
        <EduSection user={user}/>
      </div>
    );
  }

});
