var PostActions = require('../actions/post_actions');

module.exports = {
  getPosts: function (formData) {
    $.ajax({
      url: '/api/posts',
      dataType: 'json',
      success: function (forms) {
        PostActions.fetchPosts(forms);
      },
      error: function (xhr) {
        console.log('PostPostApiUtil#createPost error');
      }
    });
  },

  getPost: function (id) {
    $.ajax({
      url: '/api/posts/' + id,
      dataType: 'json',
      success: function (forms) {
        PostActions.receivePost(forms);
      },
      error: function (xhr) {
        console.log('PostPostApiUtil#getPost error');
      }
    });
  },

  createPost: function (formData) {
    $.ajax({
      url: '/api/posts',
      type: 'POST',
      dataType: 'json',
      data: { post: formData },
      success: function (form) {
        PostActions.receivePost(form);
      },
      error: function (xhr) {
        console.log('PostPostApiUtil#createPost error');
      }
    });
  },

  updatePost: function (formData) {
    $.ajax({
      url: '/api/posts/' + formData.id,
      dataType: 'json',
      type: 'PATCH',
      data: { post: { user_id: formData.user_id,
                      title: formData.title,
                      body: formData.body
                    } },
      success: function (form) {
        PostActions.receivePost(form);
      },
      error: function (xhr) {
        console.log('PostPostApiUtil#updatePost error');
      }
    });
  },

  removePost: function (id) {
    $.ajax({
      url: '/api/posts/' + id,
      type: 'DELETE',
      success: function (form) {
        PostActions.removePost(form);
      },
      error: function (xhr) {
        console.log('PostPostApiUtil#deletePost error');
      }
    });
  },
};
