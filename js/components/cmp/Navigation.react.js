var React = require('react');
var Link = require('react-router-component').Link;

var Navigation = React.createClass({
  render: function() {
    return (
      <div className="navigation">
          <Link className="navigation__link" href="/">Main</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="navigation__link" href="/joe">Joe</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="navigation__link" href="/jock">Jock</Link>
      </div>
    );
  }
});

module.exports = Navigation;
