'use strict'

module.exports = {
  configs: {
    base: require('./base'),
    '+node': require('./node'),
    '+react': require('./react'),
    '+ts': require('./ts'),
  },
}
