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
                `${body.currently.summary}. The temperature is ${body.currently.temperature}, and there is a ${body.currently.precipProbability}% chance of rain`

                // summary: body.currently.summary,
                // temperature: body.currently.temperature,
                // precip: body.currently.precipProbability
            )
        }
    })

}
module.exports = forecast