var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session_store');
var SessionApiUtil = require('../util/session_api_util');
var ProfileForm = require('./profile/ProfileForm');
var HomeForm = require('./home/HomeForm');
var LoginForm = require('./LoginForm');
var Navbar = require('./Navbar.jsx');

var App = React.createClass({

  componentDidMount: function () {
    SessionApiUtil.fetchCurrentUser();
    this.forceListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount: function () {
    this.forceListener.remove();
  },

  greeting: function(){
    if (SessionStore.isUserLoggedIn()) {
    	return (
    		<hgroup>
          <Navbar/>
    		</hgroup>
    	);
    }

  },

  render: function() {
    return (
      <div>
        <header>
          { this.greeting() }
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
