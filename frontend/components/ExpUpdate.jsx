// var ProfileApiUtil = require('../util/profile_api_util');
var React = require('react');
var ProfileApiUtil = require('../util/profile_api_util');
var ProfileStore = require('../stores/profile_store');

module.exports = React.createClass({
  getInitialState: function () {
    var potExp = ProfileStore.find(this.props.params.expId);
    var exp = potExp ? potExp : {};
    return {user_id: exp.user_id, company_name: exp.company_name, title: exp.title,
            location: exp.location, description: exp.description};
  },

  componentDidMount: function () {
    this.expListener = ProfileStore.addListener(this.handleChange);
    ProfileApiUtil.getExperience(parseInt(this.props.params.expId));
  },

  componentWillUnmount: function () {
    this.expListener.remove();
  },

  handleChange: function () {
    var potExp = ProfileStore.find(this.props.params.expId);
    var exp = potExp ? potExp : {};
    this.setState({user_id: exp.user_id, company_name: exp.company_name,
      title: exp.title, location: exp.location, description: exp.description});
  },

  changeCompany: function (event) {
    var comp = event.target.value;
    this.setState({company_name: comp});
  },

  changeTitle: function (event) {
    var tit = event.target.value;
    this.setState({title: tit});
  },

  changeLocation: function (event) {
    var loc = event.target.value;
    this.setState({location: loc});
  },

  changeDescription: function (event) {
    var desc = event.target.value;
    this.setState({description: desc});
  },

  handleSubmit: function (event) {
    event.preventDefault();
    ProfileApiUtil.createExperience(this.state);
    hashHistory.push("/");
  },

  render: function () {
    return (
      <form className='exp-form' onSubmit={this.handleSubmit}>
        <label className = 'exp-label'>Company Name *</label>
        <br/>
        <input
        type='text' className = 'exp-input'
        value={this.state.company}
        onChange={this.changeCompany}/><br/>

        <label className = 'exp-label'>Title *</label>
        <br/>
        <input
        type='text' className = 'exp-input'
        value={this.state.title}
        onChange={this.changeTitle}/><br/><br/>

        <label className = 'exp-label'>Location</label>
        <br/>
        <input
        type='text' className = 'exp-input'
        value={this.state.location}
        onChange={this.changeLocation}/><br/>

        <label className = 'exp-label'>Description</label>
        <br/>
        <textarea className = 'exp-txt-area'
        value={this.state.description}
        onChange={this.changeDescription}/><br/>

        <input
        type="submit" className = 'exp-submit'
        value="Save"/>
      </form>
    );
  }
});
