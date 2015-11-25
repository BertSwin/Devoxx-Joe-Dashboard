var $ = require('jquery');
var joeEndpoint = "http://localhost:8000/himself";

module.exports = {
  getCurrentPower: function(success) {
    $.ajax({
      url: joeEndpoint + "/power/current",
      method: 'GET'
    })
    .done(
      function(result){
        result.guy = 'joe';
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
      url: joeEndpoint + "/power/requested",
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
      url: joeEndpoint + "/brain/pace",
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
        result.guy = 'joe';
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
