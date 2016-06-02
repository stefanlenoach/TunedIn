var React = require('react');
var Link = require('react-router').Link;
require('react-addons-linked-state-mixin');
var ExperienceForm = require('./ExperienceForm');
var ProfileStore = require('../stores/profile_store');
var ErrorStore = require('../stores/error_store');
var ProfileApiUtil = require('../util/profile_api_util');
var SessionStore = require('../stores/session_store');
var SessionApiUtil = require('../util/session_api_util');
var ExpIndex = require('./ExpIndex');

module.exports = React.createClass ({
  createExp: function (event) {
    event.preventDefault();

  },

  render: function () {
    return (
      <div className='profile'>
        <nav className='mainnav'>
        </nav>

        <nav className='subnav'>
        </nav>

        <div className='exp-sec'>
          <h2>Experience</h2>
          <button className='add-exp-btn'
          onClick={this.createExp}>+ Add position</button>&nbsp;

          <div className='exp-items'>
            <ExpIndex/>
          </div>

        </div>
        <div className='profile-main'>
          <h2>Hi, {SessionStore.currentUser().first_name}!</h2>
          <input type="submit" value="logout" onClick={ SessionApiUtil.logout } />

          <ExperienceForm/>
        </div>
      </div>
    );
  }

});
