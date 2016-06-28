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

var LoginForm = React.createClass({
	mixins: [LinkedStateMixin],

  getInitialState: function () {
			return {
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

  guestSignIn: function () {
    var formData = {
     email: "guestUser@tunedin.com",
     password: "123123"
   };
   SessionApiUtil.login(formData);
  },


	handleSubmit: function (e) {
		e.preventDefault();
    var formData;
		formData = {
			email: this.state.email,
			password: this.state.password
		};
    this.setState({email: "", password: ""});
    SessionApiUtil.login(formData);
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
    var  navLink = <Link className='login-link' to="/signup">Join now</Link>;
			return (
        <div className='login'>
          <div className='login-header'>
          <h2></h2>
          </div>

        	<div className="form-login">
  					<form onSubmit={this.handleSubmit}>
            	<div className='error-login base'>
  							{ this.fieldErrors("base") }
            	</div>
  						<br />
            	<div className='error-login email'>
  							{ this.fieldErrors("email") }
            	</div>
  						<input className="login-input" type="text" placeholder="Email Address" valueLink={this.linkState("email")} />
              <br /><br />
            	<div className='error-login password'>
  							{ this.fieldErrors("password") }
            	</div>
  						<input className="login-input" type="password" placeholder="Password" valueLink={this.linkState("password")} />
  						<br />
  						<input className="login-submit user" type="submit" value="Sign In" />
  					</form>
          <div className='twitter-login'></div>
          <div className='login-signin'>
            <a className='twitter-login' href="auth/twitter/">Sign in with Twitter</a>
            <h3>Not a member? {navLink}</h3>
          </div>
          <div className='login-submit guest'>
            <button className="guest-btn" onClick={this.guestSignIn}>Guest</button>
          </div>
        </div>
      </div>
			);
    }
});

module.exports = LoginForm;
