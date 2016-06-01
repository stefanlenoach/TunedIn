

module.exports = createClass({
  getInitialState: function () {
    return {company: "", title: "", location: "", description: ""};
  },

  changeCompany: function (event) {
    var comp = event.target.value;
    this.setState({company: comp});
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

  }

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        type='text'
        value={this.state.company}
        onChange={this.changeCompany}/>

        <input
        type='text'
        value={this.state.title}
        onChange={this.changeTitle}/>

        <input
        type='text'
        value={this.state.location}
        onChange={this.changeLocation}/>


        <textarea
        value={this.state.description}
        onChange={this.changeDescription}/>

        <input type="submit" value="Save"/>
      </form>
    );
  }
});
