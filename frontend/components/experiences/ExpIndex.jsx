var React = require('react');
var ProfileApiUtil = require('../../util/profile_api_util');
var ProfileStore = require('../../stores/profile_store');
var ExpIndexItem = require('./ExpIndexItem');

module.exports = React.createClass({
  getInitialState: function () {
    return {exps: ProfileStore.all() };
  },

  componentDidMount: function () {
    this.expListener = ProfileStore.addListener(this.onChange);
    ProfileApiUtil.getExperiences();
  },

  componentWillUnmount: function () {
    this.expListener.remove();
  },

  onChange: function () {
    this.setState({ exps: ProfileStore.all() });
  },

  render: function () {
    var id = this.props.user.id;
    return (
      <div>
        {
          this.state.exps.map(function(exp){
            if (id === exp.user_id && exp.title !== undefined){
              return (<ExpIndexItem key={exp.id} exp={exp}/>);
            } else {
              return (null);
            }
          })
        }
      </div>
    );
  }
});
