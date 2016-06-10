var React = require('react');
var PostApiUtil = require('../../util/post_api_util');
var PostStore = require('../../stores/post_store');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  getInitialState: function () {
    var pst = PostStore.find(this.props.post.id);
    var post = pst ? pst : {};
    return {id: post.id, user_id: post.user_id, title: post.title, body: post.body};
  },

  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.handleChange);
    PostApiUtil.getPost(parseInt(this.props.post.id));
  },

  componentWillUnmount: function () {
    this.postListener.remove();
  },

  handleChange: function () {
    var pst = PostStore.find(this.props.post.id);
    var post = pst ? pst : {};
    this.setState({id: post.id, user_id: post.user_id, title: post.title, body: post.body});
  },

  changeTitle: function (event) {
    var tit = event.target.value;
    this.setState({title: tit});
  },

  changeBody: function (event) {
    var bod = event.target.value;
    this.setState({body: bod});
  },

  handleSubmit: function (event) {
    event.preventDefault();
    PostApiUtil.updatePost(this.state);
    this.props.close();
  },

  render: function () {
    return (
      <form className='post-form' onSubmit={this.handleSubmit}>

        <label className='post-label'>Title</label>
        <br/>
        <input
        type='text' className='post-input'
        value={this.state.title}
        onChange={this.changeTitle}/><br/><br/>

        <label className='post-label'>Body</label>
        <br/>
        <textarea className='post-txt-area'
        value={this.state.body}
        onChange={this.changeBody}/><br/>

        <input
        type="submit" className = 'post-submit'
        value="Save"/>
      </form>
    );
  }
});
