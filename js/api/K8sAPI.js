var $ = require('jquery');
var servicesEndpoint = "http://k8s.xploregroup.net:8080/api/v1/namespaces/default/replicationcontrollers";

module.exports = {
  getNormalInstances: function(success) {
    $.ajax({
      url: servicesEndpoint + "/devoxx-joe-o2normal",
      method: 'GET'
    })
    .done(
      function(result){
        success(result.status.replicas);
      })
    .fail(
      function(e){
        console.log(e);
      }
    );
  },
  getPremiumInstances: function(success) {
    $.ajax({
      url: servicesEndpoint + "/devoxx-joe-o2premium",
      method: 'GET'
    })
    .done(
      function(result){
        success(result.status.replicas);
      })
    .fail(
      function(e){
        console.log(e);
      }
    );
  },
  addNormalInstance(){
    this.getNormalInstances(
      function(replicaCount){
        newReplicaCount = replicaCount + 1;
        $.ajax({
          url: servicesEndpoint + "/devoxx-joe-o2normal",
          method: 'PATCH',
          data: JSON.stringify(
            {
              spec: {
                replicas: newReplicaCount
              }
            }
          ),
          type : 'PATCH',
          dataType: "json",
          contentType: "application/merge-patch+json"
        })
        .done(
          function(result){
            console.log(result.status.replicas);
          })
        .fail(
          function(e){
            console.log(e);
          }
        );
      }
    );
  },
  addPremiumInstance(){
    this.getPremiumInstances(
      function(replicaCount){
        newReplicaCount = replicaCount + 1;
        $.ajax({
          url: servicesEndpoint + "/devoxx-joe-o2premium",
          method: 'PATCH',
          data: JSON.stringify(
            {
              spec: {
                replicas: newReplicaCount
              }
            }
          ),
          type : 'PATCH',
          dataType: "json",
          contentType: "application/merge-patch+json"
        })
        .done(
          function(result){
            console.log(result.status.replicas);
          })
        .fail(
          function(e){
            console.log(e);
          }
        );
      }
    );
  },
  removeNormalInstance(){
    this.getNormalInstances(
      function(replicaCount){
        newReplicaCount = replicaCount - 1;
        $.ajax({
          url: servicesEndpoint + "/devoxx-joe-o2normal",
          method: 'PATCH',
          data: JSON.stringify(
            {
              spec: {
                replicas: newReplicaCount
              }
            }
          ),
          type : 'PATCH',
          dataType: "json",
          contentType: "application/merge-patch+json"
        })
        .done(
          function(result){
            console.log(result.status.replicas);
          })
        .fail(
          function(e){
            console.log(e);
          }
        );
      }
    );
  },
  removePremiumInstance(){
    this.getPremiumInstances(
      function(replicaCount){
        newReplicaCount = replicaCount - 1;
        $.ajax({
          url: servicesEndpoint + "/devoxx-joe-o2premium",
          method: 'PATCH',
          data: JSON.stringify(
            {
              spec: {
                replicas: newReplicaCount
              }
            }
          ),
          type : 'PATCH',
          dataType: "json",
          contentType: "application/merge-patch+json"
        })
        .done(
          function(result){
            console.log(result.status.replicas);
          })
        .fail(
          function(e){
            console.log(e);
          }
        );
      }
    );
  }
};
