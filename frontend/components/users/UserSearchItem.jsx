var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

  render: function () {
    var user = this.props.user;

    if (!user) {
      return(<div></div>);
    } else {

      return (
        <div className='connections' >
          <Link to={'/users/' + user.id} className="connect-background">
            <div className='connect-pic'>
              <img src={user.image_url}/>
            </div>
            <div className='connect-text'>
              <div to={'/users/' + user.id} className='connect-name'>{user.first_name + " " + user.last_name}</div><br/>
              <div to={'/users/' + user.id} className='connect-pos'>{user.current_position}</div><br/>
              <div to={'/users/' + user.id} className='connect-loc'>{user.location}</div>
            </div>
          </Link>
        </div>
      );
    }
  }
});
