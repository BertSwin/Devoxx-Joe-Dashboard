var AppDispatcher = require('../dispatcher/AppDispatcher');
var JoeConstants = require('../constants/JoeConstants');
var JockConstants = require('../constants/JockConstants');
var JoeAPI = require('../api/JoeAPI');
var JockAPI = require('../api/JockAPI');

// Define action methods
var JoeActions = {
  updateSpeed: function(speed, guy) {
    if(guy == 'joe'){
      JoeAPI.setSpeed(speed, this.updateRequestedPower);
      AppDispatcher.handleAction({
        actionType: JoeConstants.UPDATE_SPEED_JOE,
        data: speed
      });
    } else if (guy == 'jock'){
      JockAPI.setSpeed(speed, this.updateRequestedPower);
      AppDispatcher.handleAction({
        actionType: JockConstants.UPDATE_SPEED_JOCK,
        data: speed
      });
    }
  },

  updateRequestedPower: function(result) {
    if(result.guy == 'joe'){
      AppDispatcher.handleAction({
        actionType: JoeConstants.UPDATE_REQUESTED_POWER_JOE,
        data: result
      });
    } else if (result.guy == 'jock'){
      AppDispatcher.handleAction({
        actionType: JockConstants.UPDATE_REQUESTED_POWER_JOCK,
        data: result
      });
    }
  },

  updateCurrentPower: function(result) {
    if(result.guy == 'joe'){
      AppDispatcher.handleAction({
        actionType: JoeConstants.UPDATE_CURRENT_POWER_JOE,
        data: result
      });
    } else if (result.guy == 'jock'){
      AppDispatcher.handleAction({
        actionType: JockConstants.UPDATE_CURRENT_POWER_JOCK,
        data: result
      });
    }
  },

  fetchCurrentPower: function(guy) {
    if(guy == 'joe'){
      JoeAPI.getCurrentPower(this.updateCurrentPower);
    } else if (guy == 'jock') {
      JockAPI.getCurrentPower(this.updateCurrentPower);
    }
  }
};

module.exports = JoeActions;
