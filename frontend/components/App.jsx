var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session_store');
var SessionApiUtil = require('../util/session_api_util');

var ProfileForm = require('./ProfileForm');
var HomeForm = require('./home/HomeForm');
var LoginForm = require('./LoginForm');
var Navbar = require('./Navbar');

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
    } else if (["/login", "/signup"].indexOf(this.props.location.pathname) === -1) {
      return (
        <nav>
          <Link to="/login" activeClassName="current">Login</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
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
