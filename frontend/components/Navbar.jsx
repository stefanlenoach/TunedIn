var React = require('react');
var UserApiUtil = require('../util/user_api_util');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session_store');
var SessionApiUtil = require('../util/session_api_util');
var ReactRouter = require('react-router');
var router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;



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

  reset: function () {
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  showUser: function(userId){
    hashHistory.push('/users/' + userId);
    this.setState({ searchString: "" });
  },

  handleSubmit: function(e){

  },

  render: function () {
    var that = this;
    var searchString = this.state.searchString.trim().toLowerCase();
    var users = [];
    if(searchString.length > 0){
        users = SessionStore.all();
        users = users.filter(function(user){
            return (user.first_name + " " + user.last_name).toLowerCase().match( searchString );
        });
    }
    return (
      <div>
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
            <nav>
            <ul className = 'search-items'>
            { users.map(function(user){
              return (<li className='search-item' key={user.id}>
                <button className='search-item-link' onClick={that.showUser(user.id)}>
                  {user.first_name + " " + user.last_name}
                </button>
              </li>);
              })
            }
          </ul>
          </nav>
        </nav>
    </div>
    );
  }
});
