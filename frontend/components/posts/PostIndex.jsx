var React = require('react');
var PostApiUtil = require('../../util/post_api_util');
var PostStore = require('../../stores/post_store');
var PostItem = require('./PostItem');
var ConnectionStore = require('../../stores/connection_store');
var ConnectionApiUtil = require('../../util/connection_api_util');
var SessionStore = require('../../stores/session_store');

module.exports = React.createClass({
  getInitialState: function () {
    return { posts: PostStore.all() };
  },

  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.onChange);
    PostApiUtil.getPosts();
    ConnectionApiUtil.getConnections();
  },

  componentWillUnmount: function () {
    this.postListener.remove();
  },

  onChange: function () {
    this.setState({ posts: PostStore.all() });
  },

  render: function () {
    var connections = ConnectionStore.allConnected(SessionStore.currentUser().id);
    var posts = [];
    this.state.posts.forEach(function(post){
        connections.forEach(function(connection){
          if (post.user_id === connection.connector_id ||
              post.user_id === connection.connectee_id)
            {
              posts.push(post);
            }
        });
    });

    return (
      <div>
      {
        posts.map(function(post){
            return (<PostItem key={post.id} post={post}/>);
        })
      }
      </div>
    );
  }
});
