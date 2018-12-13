const middleware = (req, res, next) => {
  console.log('server middleware')
  next()
}

module.exports = function myModule() {
  this.addServerMiddleware(middleware)
}

module.exports.meta = require('../package.json')
