var React = require('react');
var UserApiUtil = require('../../util/user_api_util');
var SessionStore = require('../../stores/session_store');
var UserHeaderItem = require('./UserHeaderItem');
var UserExp = require('./UserExp');
var UserEdu = require('./UserEdu');


module.exports = React.createClass({
  getInitialState: function () {
    return {user: {id: "", first_name: "", last_name: "", current_position: "", location: "", imageUrl: ""} };
  },

  componentDidMount: function () {
    this.userListener = SessionStore.addListener(this.onChange);
    UserApiUtil.getUser(this.props.params.userId);
  },

  componentWillReceiveProps: function (newProps) {
    UserApiUtil.getUser(newProps.params.userId);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  onChange: function () {
    this.setState({ user: SessionStore.find(this.props.params.userId) });
  },

  render: function () {
    var user = this.state.user;
    var userId = this.props.params.userId;
    return (
      <div className='profile'>

        <div className='profile-main'>
          <div className='header-sec'>
            <UserHeaderItem user={user} userId={userId} />
          </div>
          <div className='exp-sec'>
            <h2>Experience</h2>

            <div className='exp-items'>
              <UserExp user={user}/>
            </div>
          </div>
            <div className='edu-sec'>

              <h2>Education</h2>
              <div className='edu-items'>
                <UserEdu user={user}/>
              </div>

            </div>
          </div>
      </div>
    );
  }
});
