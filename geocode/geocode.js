const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodeAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
        json: true
    }, (error, response, body) =>{
        if (error){
            // Callback memanggil arrow function yg ada di app.js
            callback('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK'){
            callback(undefined, {  // undefined = errorMessage nya gaada (karena ga error)
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng

            });
        }
    });
}

module.exports = {
    geocodeAddress
};

