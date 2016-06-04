var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session_store');
var SessionApiUtil = require('../util/session_api_util');
var UserApiUtil = require('../util/user_api_util');

var ProfileForm = require('./ProfileForm');
var HomeForm = require('./HomeForm');
var LoginForm = require('./LoginForm');

var App = React.createClass({
  getInitialState: function () {
    return{ searchString: "" };
  },

  componentDidMount: function () {
    SessionApiUtil.fetchCurrentUser();
    this.forceListener = SessionStore.addListener(this.forceUpdate.bind(this));
    UserApiUtil.getUsers();
  },

  handleChange: function(e){
    this.setState({ searchString: e.target.value });
  },

  handleSubmit: function(e){

  },

  greeting: function(){
    if (SessionStore.isUserLoggedIn()) {
      var users = SessionStore.all();
      var searchString = this.state.searchString.trim().toLowerCase();
      if(searchString.length > 0){
          users = users.filter(function(user){
              return (user.first_name + " " + user.last_name).toLowerCase().match( searchString );
          });
      }

    	return (
    		<hgroup>
        <nav className='navbar'>
          <nav className='mainnav'>
          </nav>
            <button className='logout-btn' onClick={ SessionApiUtil.logout }>Log out</button>

            <form className='search' onSubmit={this.handleSubmit}>
              <input className='searchbar' type='text' onChange={this.handleChange}
              placeholder='Search for people, jobs, companies and more...'/>

              <input className='search-btn' type='submit' value='Search'/>
            </form>

          <nav className='subnav'></nav>
            <Link className='nav-link' to='/home'>Home</Link>
            <Link className='nav-link' to='/profile'>Profile</Link>
            <Link className='nav-link' to='/connections'>Connections</Link>
        </nav>
          <HomeForm/>
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
