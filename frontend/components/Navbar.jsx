var React = require('react');
var UserApiUtil = require('../util/user_api_util');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session_store');
var SessionApiUtil = require('../util/session_api_util');
var ReactRouter = require('react-router');
var router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;

var Notifications = require('./connections/Notifications');


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

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  showUser: function(userId){
    hashHistory.push('/users/' + userId);
    this.setState({ searchString: "" });
  },

  hideSearch: function () {
    this.setState({ searchString: "" });
  },


  logout: function () {
    hashHistory.push('/login');
    SessionApiUtil.logout();
  },

  handleSubmit: function(){
    var params = encodeURI(this.state.searchString);
    hashHistory.push('/usersearch?query=' + params);
    this.setState({ searchString: "" });
  },

  render: function () {
    var that = this;
    var searchString = this.state.searchString.trim().toLowerCase();
    var allUsers = [];
    if(searchString.length > 0){
        allUsers = SessionStore.all();
        allUsers = allUsers.filter(function(user){
            return (user.first_name + " " + user.last_name).toLowerCase().match( searchString );
        });
    }
    users = allUsers.slice(0,6);

    return (
      <div>
        <nav className='navbar'>
          <nav className='mainnav'>
            <div className='right-side'>
              <button className='logout-btn' onClick={ this.logout }>Log out</button>
              <Notifications/>
            </div>
            <div className='search-div'>
              <form className='search' onSubmit={this.handleSubmit}>
                <input className='searchbar' type='text' onChange={this.handleChange}
                placeholder='Search for people, jobs, companies and more...' value={this.state.searchString}/>

                <input className='search-btn' type='submit' value='Search'/>
              </form>

              <ul className = 'search-items'>
              { users.map(function(user){
                return (<li className='search-item' key={user.id} onClick={this.hideSearch}>
                  <Link className='search-item-link' to={'/users/' + user.id} >
                    <div className= 'search-pic'>
                      <img src={user.image_url}/>
                    </div>
                    <div className='search-name'>
                      {user.first_name + " " + user.last_name}
                    </div>
                  </Link>
                </li>);
              }.bind(this))
              }
              </ul>

            </div>

          </nav>
          <nav className='subnav'>
            <div className="subdiv">
              <Link className='nav-link' to='/home'>Home</Link>
              <Link className='nav-link' to='/profile'>Profile</Link>
              <Link className='nav-link' to='/connections'>Connections</Link>
            </div>
          </nav>

        </nav>
    </div>
    );
  }
});
