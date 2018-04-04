const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/3fceff1325f2dec55c612d79f53f0e40/${lat},${lng}`,
        json: true
    }, (error, response, body) =>{
        if (!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })            
        } else{
            callback('Unable to fetch weather');
        } 
    });
}

module.exports.getWeather = getWeather;