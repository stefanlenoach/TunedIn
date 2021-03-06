//React

var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
//components
var App = require('./components/App.jsx');
var LoginForm = require('./components/LoginForm');
var ProfileForm = require('./components/profile/ProfileForm');
var HomeForm = require('./components/home/HomeForm');
var ConnectionsIndex = require('./components/connections/ConnectionsIndex.jsx');
var ShowUser = require('./components/users/ShowUser');
var SigninForm = require('./components/SigninForm');
var UserSearch = require('./components/users/UserSearch');
//Auth
var SessionStore = require('./stores/session_store');
var SessionApiUtil = require('./util/session_api_util');

var Router = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ LoginForm } />
      <Route path='/login' component={ LoginForm } />
      <Route path="/signup" component={ SigninForm } />
      <Route path="/profile" component={ ProfileForm } onEnter={_ensureLoggedIn}/>
      <Route path="/home" component={ HomeForm } onEnter={_ensureLoggedIn} />
      <Route path="/connections" component={ ConnectionsIndex } onEnter={_ensureLoggedIn} />
      <Route path='/users/:userId' component={ ShowUser } onEnter={_ensureLoggedIn} />
      <Route path='usersearch' component={ UserSearch } onEnter={_ensureLoggedIn} />
    </Route>
  </Router>
);



function _ensureLoggedIn(nextState, replace, asyncDoneCallback) {
  if (SessionStore.currentUserHasBeenFetched()) {
    redirectIfNotLoggedIn();
  } else {
    SessionApiUtil.fetchCurrentUser(redirectIfNotLoggedIn);
  }

  function redirectIfNotLoggedIn() {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/');
    }
    asyncDoneCallback();
  }
}

document.addEventListener('DOMContentLoaded', function(){
  var profileNode = document.body;
  Modal.setAppElement(profileNode);
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
