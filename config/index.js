const fs = require('fs')
const path = require('path')
const config  = require('../dome/config')
const {
  debug,
  questions = [],
  questionTitle,
  questionInterval,
  rules
} = config.checkList || {}

module.exports = {
  debug,
  questions,
  questionTitle,
  questionInterval,
  rules
}