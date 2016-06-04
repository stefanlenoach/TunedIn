var React = require('react');
var ProfileApiUtil = ('../util/profile_api_util');
var ProfileStore = ('../stores/profile_store');
var UserExpItem = ('./UserExpItem');

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
          if (id === exp.user_id){
            return (<UserExpItem key={exp.id} exp={exp}/>);
          } else {
            return (null);
          }
        })
      }
      </div>
    );
  }
});
