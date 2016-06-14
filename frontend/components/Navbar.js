var UserApiUtil = require('../util/user_api_util');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session_store');
var SessionApiUtil = require('../util/session_api_util');
var ReactRouter = require('react-router');
var router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;

var Notifications = require('./connections/Notifications');


module.exports = React.createClass({displayName: "exports",
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
      React.createElement("div", null, 
        React.createElement("nav", {className: "navbar"}, 
          React.createElement("nav", {className: "mainnav"}, 
            React.createElement("div", {className: "right-side"}, 
              React.createElement("button", {className: "logout-btn", onClick:  this.logout}, "Log out"), 
              React.createElement(Notifications, null)
            ), 
            React.createElement("div", {className: "search-div"}, 
              React.createElement("form", {className: "search", onSubmit: this.handleSubmit}, 
                React.createElement("input", {className: "searchbar", type: "text", onChange: this.handleChange, 
                placeholder: "Search for people, jobs, companies and more...", value: this.state.searchString}), 

                React.createElement("input", {className: "search-btn", type: "submit", value: "Search"})
              ), 

              React.createElement("ul", {className: "search-items"}, 
               users.map(function(user){
                return (React.createElement("li", {className: "search-item", key: user.id, onClick: this.hideSearch}, 
                  React.createElement(Link, {className: "search-item-link", to: '/users/' + user.id}, 
                    React.createElement("div", {className: "search-pic"}, 
                      React.createElement("img", {src: user.image_url})
                    ), 
                    React.createElement("div", {className: "search-name"}, 
                      user.first_name + " " + user.last_name
                    )
                  )
                ));
              }.bind(this))
              
              )

            )

          ), 
          React.createElement("nav", {className: "subnav"}, 
            React.createElement("div", {className: "subdiv"}, 
              React.createElement(Link, {className: "nav-link", to: "/home"}, "Home"), 
              React.createElement(Link, {className: "nav-link", to: "/profile"}, "Profile"), 
              React.createElement(Link, {className: "nav-link", to: "/connections"}, "Connections")
            )
          )

        )
    )
    );
  }
});