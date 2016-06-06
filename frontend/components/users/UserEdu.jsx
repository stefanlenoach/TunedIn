var React = require('react');
var EducationApiUtil = require('../../util/education_api_util');
var EducationStore = require('../../stores/education_store');
var UserEduItem = require('./UserEduItem');

module.exports = React.createClass({
  getInitialState: function () {
    return { edus: [] };
  },

  componentDidMount: function () {
    this.eduListener = EducationStore.addListener(this.onChange);
    EducationApiUtil.getEducations();
  },

  componentWillUnmount: function () {
    this.eduListener.remove();
  },

  onChange: function () {
    this.setState({ edus: EducationStore.all() });
  },

  render: function () {
    var id = this.props.user.id;
    return (
      <div>
      {
        this.state.edus.map(function(edu){
          if (id === edu.user_id){
            return (<UserEduItem key={edu.id} edu={edu}/>);
          } else {
            return (null);
          }
        })
      }
      </div>
    );
  }
});
