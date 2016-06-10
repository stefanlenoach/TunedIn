var React = require('react');
var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');
var ConnectionStore = require('../../stores/connection_store');
var ConnectionItem = require('./ConnectionItem');
var Link = require('react-router').Link;

module.exports = React.createClass({
  componentDidMount: function () {
    UserApiUtil.getUsers();
  },

  findUser: function () {
    if (this.props.connection.connector_id != SessionStore.currentUser().id) {
      return SessionStore.find(this.props.connection.connector_id);
    } else {
      return SessionStore.find(this.props.connection.connectee_id);
    }
  },

  render: function () {
    var user = this.findUser();
    return (
      <div className='connections' >
      <Link to={'/users/' + user.id} className="connect-background">
        <div className='connect-pic'>
          <img src={user.image_url}/>
        </div>

        <div className='connect-text'>
          <Link to={'/users/' + user.id} className='connect-name'>{user.first_name + " " + user.last_name}</Link><br/><br/>
          <Link to={'/users/' + user.id} className='connect-pos'>{user.current_position}</Link><br/><br/>
          <Link to={'/users/' + user.id} className='connect-loc'>{user.location}</Link>
        </div>
        </Link>
      </div>
    );
  }
});
