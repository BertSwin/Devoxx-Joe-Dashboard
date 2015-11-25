
var React = require('react');
var ReactDOM = require('react-dom');

var Navigation = require('../cmp/Navigation.react');
var ServicesPanel = require('../panels/ServicesPanel.react');
var Service = require('../cmp/Service.react');

var MainPage = React.createClass({
  render: function() {
    return (
      <div className="main-page">
        <Navigation />
      </div>
    );
  }
});

module.exports = MainPage;
