var React = require('react');
var Router = require('react-router-component');
var MainPage = require('./components/pages/MainPage.react');
var JoePage = require('./components/pages/JoePage.react');
var JockPage = require('./components/pages/JockPage.react');
var Locations = Router.Locations;
var Location = Router.Location;

React.render(
  <Locations hash>
    <Location path="/" handler={MainPage} />
    <Location path="/joe" handler={JoePage} />
    <Location path="/jock" handler={JockPage} />
  </Locations>,
  document.getElementById('joe')
);
