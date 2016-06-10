var React = require('react');
var AppDispatcher = require('../dispatcher/dispatcher');
var PostStore = require('../stores/post_store');
var PostApiUtil = require('../util/post_api_util');
var PostConstants = require('../constants/post_constants');


module.exports = {

  fetchPosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.GET_POSTS,
      posts: posts
    });
  },

  receivePost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_POST,
      post: post
    });
  },

  removePost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.REMOVE_POST,
      post: post
    });
  }
};
