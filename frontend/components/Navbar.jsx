var React = require('react');
var UserApiUtil = require('../util/user_api_util');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session_store');
var SessionApiUtil = require('../util/session_api_util');

module.exports = React.createClass({
  getInitialState: function () {
    return{ searchString: "" };
  },

  componentDidMount: function () {
    UserApiUtil.getUsers();
  },

  handleChange: function(e){
    this.setState({ searchString: e.target.value });
  },

  handleSubmit: function(e){

  },

  render: function () {
    var searchString = this.state.searchString.trim().toLowerCase();
    var users = [];
    if(searchString.length > 0){
        users = SessionStore.all();
        users = users.filter(function(user){
            return (user.first_name + " " + user.last_name).toLowerCase().match( searchString );
        });
    }
    return (
      <nav className='navbar'>
        <nav className='mainnav'>
        </nav>
          <button className='logout-btn' onClick={ SessionApiUtil.logout }>Log out</button>

          <form className='search' onSubmit={this.handleSubmit}>
            <input className='searchbar' type='text' onChange={this.handleChange}
            placeholder='Search for people, jobs, companies and more...'/>

            <input className='search-btn' type='submit' value='Search'/>
          </form>
          <ul>
              { users.map(function(user){
                  return (<li>{user.first_name + " " + user.last_name} <a href={user.url}>{user.url}</a></li>);
                })
              }
          </ul>

        <nav className='subnav'></nav>
          <Link className='nav-link' to='/home'>Home</Link>
          <Link className='nav-link' to='/profile'>Profile</Link>
          <Link className='nav-link' to='/connections'>Connections</Link>
      </nav>
    );
  }
});
