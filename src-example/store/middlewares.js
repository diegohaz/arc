const req = require.context('.', true, /\.\/.+\/middleware\.js$/)

module.exports = req.keys().map(key => req(key).default)
