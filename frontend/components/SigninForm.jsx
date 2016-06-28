var React = require('react');
var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionApiUtil = require('./../util/session_api_util');
var SessionStore = require('./../stores/session_store');
var ErrorStore = require('./../stores/error_store');
var UserApiUtil = require('./../util/user_api_util');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
		return {
			first_name: "",
			last_name: "",
			email: "",
			password: ""
		};
	},

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn: function () {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/home");
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var formData;
    formData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };
    this.setState({first_name: "", last_name: "", email: "", password: ""});
    UserApiUtil.signup(formData);
  },

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors(this.formType());
    if (!errors[field]) { return; }

    var messages = errors[field].map(function (errorMsg, i) {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType: function () {
    return this.props.location.pathname.slice(1);
  },

  render: function () {
    var navLink = <Link className= 'signin-link' to="/login">Sign in</Link>;
    return (
      <div className='signin'>
        <div className='signin-header'>
          <h2></h2>
          <h3>Make the most of your professional life</h3>
        </div>
          <div className='form-signin'>
            <form onSubmit={this.handleSubmit}>
              <div className='error signup-base'>
                { this.fieldErrors("base") }
              </div>
              <br />
              <div className='signin-field'>
                <label className='signin-label'> First name </label><br />
                <div className='error signup-first'>
                  { this.fieldErrors("first_name") }
                </div>
                <input className="signin-input" type="text" valueLink={this.linkState("first_name")} />
              </div>

              <br />
              <div className='signin-field'>
                <label className='signin-label'> Last name </label><br />
                <div className='error signup-last'>
                  { this.fieldErrors("last_name") }
                </div>
                <input className="signin-input" type="text" valueLink={this.linkState("last_name")} />
              </div>

              <br />
              <div className='signin-field'>
                <label className='signin-label'> Email </label><br />
                <div className='error signup-email'>
                  { this.fieldErrors("email") }
                </div>
                <input className="signin-input" type="text" valueLink={this.linkState("email")} />
              </div>

              <br />
              <div className='signin-field'>
                <label className='signin-label'> Password (6 or more characters)</label><br />
                <div className='error signup-password'>
                  { this.fieldErrors("password") }
                </div>
                <input className="signin-input" type="password" valueLink={this.linkState("password")} />
              </div>
              <br />
              <p>By clicking Join now, you agree to TunedIn's User Agreement, Privacy Policy, and Cookie Policy.</p>
              <br />
              <input className="signin-submit" type="submit" value="Join now" />

              <div className='signin-login'>
                <h3>Already on TunedIn? {navLink}</h3>
              </div>
            </form>
        </div>
      </div>
    );
  }

});
