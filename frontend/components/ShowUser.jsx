var React = require('react');
var UserApiUtil = require('../util/user_api_util');
var SessionStore = require('../stores/session_store');
var UserHeaderItem = require('./UserHeaderItem');
var UserExp = require('./UserExp');

module.exports = React.createClass({
  getInitialState: function () {
    return {user: ""};
  },

  componentDidMount: function () {
    UserApiUtil.getUser(this.props.params.userId);
    this.setState({ user: SessionStore.find(this.props.params.id) });
  },

  render: function () {
    var user = this.state.user;
    return (
      <div className='profile'>

        <div className='profile-main'>
          <UserHeaderItem user={user}/>
        </div>

        <div className='exp-sec'>
          <h2>Experience</h2>

          <div className='exp-items'>
            <UserExp user={user}/>
          </div>

        </div>

      </div>
    );
  }
});
