var $ = require('jquery');
var jockEndpoint = "http://localhost:8001/himself";

module.exports = {
  getCurrentPower: function(success) {
    $.ajax({
      url: jockEndpoint + "/power/current",
      method: 'GET'
    })
    .done(
      function(result){
        result.guy = 'jock';
        success(result);
      })
    .fail(
      function(){
        console.log('failed to retrieve currentPower');
      }
    );
  },
  getRequestedPower: function(success) {
    $.ajax({
      url: jockEndpoint + "/power/requested",
      method: 'GET'
    })
    .done(
      function(result){
        success(result.watts);
      })
    .fail(
      function(){
        console.log('failed to retrieve requestedPower');
      }
    );
  },
  setSpeed: function(speed, success) {
    $.ajax({
      url: jockEndpoint + "/brain/pace",
      method: 'POST',
      data: JSON.stringify(
        {
          pace: speed
        }
      ),
      dataType: "json",
      contentType: "application/json"
    })
    .done(
      function(result){
        result.guy = 'jock';
        success(result);
      }
    )
    .fail(
      function(){
        console.log('failed to set speed');
      }
    );
  }
};
