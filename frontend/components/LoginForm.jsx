var React = require('react');
var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionApiUtil = require('./../util/session_api_util');
var SessionStore = require('./../stores/session_store');
var ErrorStore = require('./../stores/error_store');
var UserApiUtil = require('./../util/user_api_util');

var LoginForm = React.createClass({
	mixins: [LinkedStateMixin],

  getInitialState: function () {
		if (this.props.location.pathname === "/login") {
			return {
				email: "",
				password: ""
			};
		} else {
			return {
				first_name: "",
				last_name: "",
				email: "",
				password: ""
			};
		}
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
      this.context.router.push("/");
    }
  },

	handleSubmit: function (e) {
		e.preventDefault();
    var formData;
    if (this.props.location.pathname === "/login") {
			 formData = {
				email: this.state.email,
				password: this.state.password
			};
      SessionApiUtil.login(formData);
    } else {

			 formData = {
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				email: this.state.email,
				password: this.state.password
			};
      UserApiUtil.signup(formData);
    }
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
    var navLink;
    if (this.formType() === "login") {
      navLink = <Link to="/signup">Sign up</Link>;
			return (
        <div className='login'>
          <div className='login-header'>
            <h3>Welcome to TunedIn! Please { this.formType() } or { navLink }</h3>
          </div>
        <div className="form-login">
  				<form onSubmit={this.handleSubmit}>

  					{ this.fieldErrors("base") }

  					<br />
  					<label className='lohin-label'> Email </label> <br />
  						{ this.fieldErrors("email") }
  						<input className="login-input" type="text" valueLink={this.linkState("email")} />


  					<br />
  					<label className='lohin-label'> Password </label> <br />
  						{ this.fieldErrors("password") }
  						<input className="login-input" type="password" valueLink={this.linkState("password")} />


  					<br />
  					<input className="login-input" type="submit" value="Submit" />
  				</form>
          </div>
        </div>
			);
    } else {
      navLink = <Link className= 'signin-link' to="/login">Sign in</Link>;


			return (
        <div className='signin'>
          <div className='signin-header'>
            <h2>TunedIn</h2>
            <h3>Make the most of your professional life</h3>
          </div>
        <div className='form-signin'>
  				<form onSubmit={this.handleSubmit}>

  				{ this.fieldErrors("base") }
  				<br />
          <div className='signin-field'>
    				<label className='signin-label'> First name </label><br />
    				{ this.fieldErrors("first_name") }
    				<input className="signin-input" type="text" valueLink={this.linkState("first_name")} />
          </div>

  				<br />
            <div className='signin-field'>
    				<label className='signin-label'> Last name </label><br />
    				{ this.fieldErrors("last_name") }
    				<input className="signin-input" type="text" valueLink={this.linkState("last_name")} />
          </div>

  				<br />
          <div className='signin-field'>
    				<label className='signin-label'> Email </label><br />
    				{ this.fieldErrors("email") }
    				<input className="signin-input" type="text" valueLink={this.linkState("email")} />
          </div>

  				<br />
          <div className='signin-field'>
    				<label className='signin-label'> Password (6 or more characters)</label><br />
    				{ this.fieldErrors("password") }
    				<input className="signin-input" type="password" valueLink={this.linkState("password")} />
          </div>

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

	}
});

module.exports = LoginForm;
