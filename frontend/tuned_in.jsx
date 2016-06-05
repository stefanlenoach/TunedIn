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
var App = require('./components/App');
var LoginForm = require('./components/LoginForm');
var ProfileForm = require('./components/ProfileForm');
var HomeForm = require('./components/home/HomeForm');
var ConnectionsForm = require('./components/connections/ConnectionsForm');
var ShowUser = require('./components/ShowUser');

//Auth
var SessionStore = require('./stores/session_store');
var SessionApiUtil = require('./util/session_api_util');

var Router = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ LoginForm } />
      <Route path="/profile" component={ ProfileForm } />
      <Route path="/home" component={ HomeForm } />
      <Route path="/connections" component={ ConnectionsForm } />
      <Route path='/users/:userId' component={ ShowUser } />
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
      replace('/login');
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
