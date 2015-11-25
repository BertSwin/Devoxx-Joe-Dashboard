var React = require('react');
var JoeStore = require('../../stores/JoeStore');
var $ = require('jquery');
var Calculations = require('../../utils/Calculations');

var Cyclist = React.createClass({
  getInitialState: function() {
      return {
        frameIndex: 1
      };
  },

  componentDidMount: function() {
    this.setSpeed(0);
    JoeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    JoeStore.removeChangeListener(this._onChange);
  },

  cycle: function cycle(){
      if(this.state.frameIndex == 1){
          frame = 2;
      }else{
          frame = 1;
      }

      console.log('frameIndex: ' + frame);

      if (this.isMounted()) {
        this.setState({
          frameIndex: frame
        });
      }
  },

  setSpeed: function setSpeed(speed){
    clearInterval(this.state.handle);

    if(speed != 0) {
      interval = 3000 / speed;
      console.log('set interval to ' + interval);
      this.state.handle = setInterval(this.cycle, interval);
    }
  },

  render: function() {
    url = "img/" + this.props.guy + '-' + this.state.frameIndex + ".png";

    return (
      <div className="cyclist">
        <img src={url} className="cyclist__animation" />
      </div>
    );
  },

  _onChange: function() {
    if (this.isMounted()) {
      this.setSpeed(Calculations.calculateSpeed(JoeStore.getCurrentPower(this.props.guy)));
    }
  }
});

module.exports = Cyclist;
