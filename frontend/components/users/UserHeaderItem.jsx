var React = require('react');

module.exports = React.createClass({
  render: function () {
    var user = this.props.user;
    return (
      <div className='user-header'>
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
