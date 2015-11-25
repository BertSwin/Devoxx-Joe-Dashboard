var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var JoeConstants = require('../constants/JoeConstants');
var JockConstants = require('../constants/JockConstants');
var _ = require('underscore');

var _speedJoe = 0;
var _currentPowerJoe = [0,0,0,0,0,0];
var _requestedPowerJoe = 0;

var _speedJock = 0;
var _currentPowerJock = [0,0,0,0,0,0];
var _requestedPowerJock = 0;

function setSpeed(speed, guy) {
  if(guy == 'joe'){
    _speedJoe = speed;
  } else if (guy == 'jock') {
    _speedJock = speed;
  }
}

function setCurrentPower(currentPower, guy) {
  if(guy == 'joe'){
    _currentPowerJoe.shift();
    _currentPowerJoe.push(currentPower.watts);
  } else if(guy == 'jock'){
    _currentPowerJock.shift();
    _currentPowerJock.push(currentPower.watts);
  }
}

function setRequestedPower(requestedPower, guy) {
  if(guy == 'joe'){
    _requestedPowerJoe = requestedPower.watts;
  } else if (guy == 'jock'){
    _requestedPowerJock = requestedPower.watts;
  }
}

var JoeStore = _.extend({}, EventEmitter.prototype, {
  getSpeed: function(guy) {
    if(guy == 'joe'){
      return _speedJoe;
    } else if (guy == 'jock'){
      return _speedJock;
    }
  },

  getCurrentPower: function(guy) {
    currentPower = [];

    if(guy == 'joe'){
      currentPower = _currentPowerJoe.slice();
    } else if (guy == 'jock'){
      currentPower = _currentPowerJock.slice();
    }

    sum = 0;
    for( var i = 0; i < currentPower.length; i++ ){
      sum += currentPower[i];
    }

    var avg = sum/currentPower.length;
    return Math.round(avg * 100) / 100;
  },

  getRequestedPower: function(guy) {
    if(guy == 'joe'){
      return _requestedPowerJoe;
    } else if (guy == 'jock'){
      return _requestedPowerJock;
    }
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    case JoeConstants.UPDATE_SPEED_JOE:
      setSpeed(action.data, 'joe');
      break;
    case JoeConstants.UPDATE_CURRENT_POWER_JOE:
      setCurrentPower(action.data, 'joe');
      break;
    case JoeConstants.UPDATE_REQUESTED_POWER_JOE:
      setRequestedPower(action.data, 'joe');
      break;
    case JockConstants.UPDATE_SPEED_JOCK:
      setSpeed(action.data, 'jock');
      break;
    case JockConstants.UPDATE_CURRENT_POWER_JOCK:
      setCurrentPower(action.data, 'jock');
      break;
    case JockConstants.UPDATE_REQUESTED_POWER_JOCK:
      setRequestedPower(action.data, 'jock');
      break;
    default:
      return true;
  }

  JoeStore.emitChange();

  return true;

});

module.exports = JoeStore;
