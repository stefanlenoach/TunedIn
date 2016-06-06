var React = require('react');
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var SessionStore = require('../../stores/session_store');


module.exports = React.createClass({
  render: function () {
    var user = SessionStore.currentUser();

    return (
      <div className='home-header'>
      <div className='pro-pic'>
        <img src={user.image_url}/>
      </div>

        <div className='pro-text'>
          <div className='pro-name'>{user.first_name + " " + user.last_name}</div>
          <div className='pro-pos'>{user.current_position}</div>
          <div className='pro-loc'>{user.location}</div>
        </div>
      </div>
    );
  }

});
