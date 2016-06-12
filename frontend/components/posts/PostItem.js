var PostApiUtil = require('../../util/post_api_util');
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
var ModalStyle = require('../../constants/modal_style_post');
var PostUpdate = require('./PostUpdate');
var SessionStore = require('../../stores/session_store');
var UserApiUtil = require('../../util/user_api_util');

module.exports = React.createClass({displayName: "exports",
  getInitialState: function () {
    return { modalOpen: false };
  },

  componentDidMount: function () {
    UserApiUtil.getUsers();
  },

  removePost: function () {
    event.preventDefault();
    PostApiUtil.removePost(this.props.post.id);
  },

  modalOpenEdit: function (event) {
    event.preventDefault();
    this.setState({ modalOpen: true });
  },

  onModalCloseEdit: function() {
    this.setState({ modalOpen: false });
  },

  render: function () {
    var user = SessionStore.find(this.props.post.user_id);
    var mod;

    if (user.id === SessionStore.currentUser().id) {
       mod =  React.createElement("div", {class: "post-mod"}, 
                React.createElement(Modal, {className: "modal", 
                  isOpen: this.state.modalOpen, 
                  onRequestClose: this.onModalCloseEdit, 
                  style: ModalStyle}, 
                  React.createElement(PostUpdate, {post: this.props.post, close: this.onModalCloseEdit}), 
                  React.createElement("button", {className: "post-cancel", onClick: this.onModalCloseEdit}, "Cancel")
                ), 
                React.createElement("div", {className: "post-rmv-edit"}, 
                  React.createElement("button", {className: "post-edit-btn", onClick: this.modalOpenEdit}, 
                  "Edit"), 

                  React.createElement("button", {className: "post-remove-btn", onClick: this.removePost}, 
                  "Delete")
                )
              );
    } else {
      mod = React.createElement("div", null);
    }


    return (
      React.createElement("div", {className: "post-item"}, 

        React.createElement("div", {className: "post-pic"}, 
          React.createElement("img", {src: user.image_url})
        ), 
        React.createElement("div", {className: "post-item-show"}, 
          React.createElement("div", {className: "post-title"}, 
            this.props.post.title
          ), 

          React.createElement("div", {className: "post-body"}, 
            this.props.post.body
          ), 
          React.createElement("div", {className: "post-footer"}, 
            React.createElement("div", {className: "post-author"}, 
              "By: " + user.first_name + " " + user.last_name
            ), 
            mod
          )
        )

      )
    );
  }

});