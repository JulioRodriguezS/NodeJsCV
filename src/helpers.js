const moment = require('moment')
const helpers = {}

helpers.dateMonthYear = (datatime) => {
    const d = moment(datatime).format('MMMM, YYYY')
    return d
}

module.exports = helpers