var AppDispatcher = require('../dispatcher/AppDispatcher');
var K8SConstants = require('../constants/K8sConstants');
var K8SAPI = require('../api/K8sAPI');

// Define action methods
var K8SActions = {
  fetchInstance: function(guy) {
    if(guy == 'joe'){
      K8SAPI.getNormalInstances(this.updateNormalInstances);
    } else if (guy == 'jock'){
      K8SAPI.getPremiumInstances(this.updatePremiummInstances);
    }
  },
  updateNormalInstances: function(instanceCount) {
    AppDispatcher.handleAction({
      actionType: K8SConstants.UPDATE_NORMAL_INSTANCES,
      data: instanceCount
    });
  },
  updatePremiummInstances: function(instanceCount) {
    AppDispatcher.handleAction({
      actionType: K8SConstants.UPDATE_PREMIUM_INSTANCES,
      data: instanceCount
    });
  },
  addInstance: function(guy){
    if(guy == 'joe'){
      K8SAPI.addNormalInstance();
    } else if (guy == 'jock'){
      K8SAPI.addPremiumInstance();
    }
  },
  removeInstance: function(guy){
    if(guy == 'joe'){
      K8SAPI.removeNormalInstance();
    } else if (guy == 'jock'){
      K8SAPI.removePremiumInstance();
    }
  }
};

module.exports = K8SActions;
