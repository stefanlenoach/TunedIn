var React = require('react');
var UserApiUtil = require('../../util/user_api_util');

module.exports = React.createClass({
  getInitialState: function () {
    var user = this.props.user;
    return { id: user.id,
             location: user.location || "",
             position: user.current_position || ""};
  },

  changePosition: function (event) {
    var pos = event.target.value;
    this.setState({ position: pos });
  },

  changeLocation: function (event) {
    var loc = event.target.value;
    this.setState({ location: loc });
  },

  handleSubmit: function () {
    UserApiUtil.updateCurrentUser(this.state);
    this.props.close();
  },

  render: function () {
    return (
      <div className='profile-form'>
        <form onSubmit={this.handleSubmit}>
          <label className='profile-label'>Current Position</label>
          <br/>
          <input
          type='text' className='profile-input'
          value={this.state.position}
          onChange={this.changePosition}/><br/>

          <label className='profile-label'>Location</label>
          <br/>
          <input
          type='text' className='profile-input'
          value={this.state.location}
          onChange={this.changeLocation}/><br/>

          <input className='profile-submit'
          type='submit'
          value='Update'/>
        </form>
      </div>
    );
  }
});
