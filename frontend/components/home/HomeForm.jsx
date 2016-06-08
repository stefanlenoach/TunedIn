var React = require('react');
var HomeHeaderItem = require('./HomeHeaderItem');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div className="header-sec">
          <HomeHeaderItem/>
        </div>
      </div>
    );
  }
});
