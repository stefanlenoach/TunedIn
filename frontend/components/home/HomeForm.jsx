var React = require('react');

var PostSection = require('../posts/PostSection');
var HomeHeaderItem = require('./HomeHeaderItem');

module.exports = React.createClass({
  render: function () {
    return (
      <div className='home'>
        <div className="header-sec">
          <HomeHeaderItem/>
          <PostSection/>
        </div>
      </div>
    );
  }
});
