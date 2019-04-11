const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/93744008d54f623e7ed555e36580b9d3/' + lat + ',' + long;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Some error message', undefined)
        } else if (body.error) {
            callback('Bad lat and long', undefined)
        } else {
            callback(undefined,
                `${body.daily.data[0].summary}. The temperature is ${body.currently.temperature}, and there is a ${body.currently.precipProbability}% chance of rain`
            )
        }
    })

}
module.exports = forecast