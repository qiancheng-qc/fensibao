'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://192.168.0.153:8088"'
  // BASE_API: '"http://47.110.237.87:8080"'
  BASE_API: '"http://192.168.0.189:8080"'
})
