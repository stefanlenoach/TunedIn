var React = require('react');
var PostApiUtil = require('../../util/post_api_util');
var PostStore = require('../../stores/post_store');
var PostItem = require('./PostItem');

module.exports = React.createClass({
  getInitialState: function () {
    return {posts: PostStore.all() };
  },

  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.onChange);
    PostApiUtil.getPosts();
  },

  componentWillUnmount: function () {
    this.postListener.remove();
  },

  onChange: function () {
    this.setState({ posts: PostStore.all() });
  },

  render: function () {
    var id = this.props.user.id;
    return (
      <div>
      {
        this.state.posts.map(function(post){
          if (id === post.user_id && post.school !== undefined){
            return (<PostItem key={post.id} post={post}/>);
          } else {
            return (null);
          }
        })
      }
      </div>
    );
  }
});
