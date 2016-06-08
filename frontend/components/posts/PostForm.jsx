var React = require('react');
var PostApiUtil = require('../../util/post_api_util');

module.exports = React.createClass({
  getInitialState: function () {
    return { title: "", body: "" };
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
    PostApiUtil.createPost(this.state);
    this.props.close();
  },

  render: function () {
    return (
      <form className='edu-form' onSubmit={this.handleSubmit}>
        <label className = 'edu-label'>Title *</label>
        <br/>
        <input
        type='text' className = 'edu-input'
        value={this.state.title}
        onChange={this.changeTitle}/><br/>

        <label className = 'edu-label'>Body</label>
        <br/>
        <textarea className = 'edu-txt-area'
        value={this.state.body}
        onChange={this.changeBody}/><br/>

        <input
        type="submit" className = 'edu-submit'
        value="Save"/>
      </form>
    );
  }
});
