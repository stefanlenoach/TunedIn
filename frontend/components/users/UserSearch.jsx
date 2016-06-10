var React = require('react');
var SessionStore = require('../../stores/session_store');
var UserSearchItem = require('./UserSearchItem');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    var searchString = this.props.location.query.query.trim().toLowerCase();
    var allUsers = [];

    allUsers = SessionStore.all();
    allUsers = allUsers.filter(function(user){
        return (user.first_name + " " + user.last_name).toLowerCase().match( searchString );
    });

    return (
      <div>
      {
        allUsers.map(function(user){
          return (<UserSearchItem key={user.id} user={user} />);
        })
      }
      </div>
    );
  }
});
