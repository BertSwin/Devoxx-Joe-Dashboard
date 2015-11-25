var $ = require('jquery');

function calculateDrag(velocity){
    // calculate drag
    var drag =0.5 * 0.509 * 0.63 * 1.226 * (velocity * 1000.0 / 3600.0) * (velocity * 1000.0 / 3600.0);
    return drag;
}

function calculatePower(velocity) {
    // calculate the forces on the rider.
    var forces = 0 + 4.0697805 + calculateDrag(velocity);

    // calculate necessary wheelpower
    var wheelpower = forces * (velocity * 1000.0 / 3600.0);

    // calculate necessary legpower
    var legpower = wheelpower / (1.0 - (3/100.0));

    return legpower;
}

module.exports = {
  calculateSpeed: function calculateSpeed(power){
    // How close to get before finishing.
    var epsilon = 0.000001;

    // Set some reasonable upper / lower starting points.
    var lowervel = -1000.0;
    var uppervel = 1000.0;
    var midvel = 0.0;

    var midpow = calculatePower(midvel);

    // Iterate until completion.
    var itcount = 0;
    do {
        if (Math.abs(midpow - power) < epsilon)
            break;

        if (midpow > power)
            uppervel = midvel;
        else
            lowervel = midvel;

        midvel = (uppervel + lowervel) / 2.0;
        midpow = calculatePower(midvel);
    } while (itcount++ < 100);

    return Math.round(midvel);
  }
};
