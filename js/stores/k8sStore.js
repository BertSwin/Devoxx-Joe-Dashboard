var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var K8SConstants = require('../constants/K8sConstants');
var _ = require('underscore');

var _normalInstanceCount = 2;
var _premiumInstanceCount = 3;

function setNormalInstanceCount(instanceCount) {
  _normalInstanceCount = instanceCount;
}

function setPremiumInstanceCount(instanceCount) {
  _premiumInstanceCount = instanceCount;
}

var K8SStore = _.extend({}, EventEmitter.prototype, {
  getInstanceCount: function(type) {
    if(type == 'premium') {
      return _premiumInstanceCount;
    } else if (type == 'normal'){
      return _normalInstanceCount;
    }

    return 0;
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
    case K8SConstants.UPDATE_NORMAL_INSTANCES:
      setNormalInstanceCount(action.data);
      break;
    case K8SConstants.UPDATE_PREMIUM_INSTANCES:
      setPremiumInstanceCount(action.data);
      break;
    default:
      return true;
  }

  K8SStore.emitChange();

  return true;
});

module.exports = K8SStore;
