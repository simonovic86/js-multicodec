'use strict'

const baseTable = require('./base-table.json')
const varintEncode = require('./util').varintEncode

// map for codecName -> codeVarintUint8Array
const varintTable = {}

for (const encodingName in baseTable) {
  const code = baseTable[encodingName]
  varintTable[encodingName] = varintEncode(code)
}

module.exports = Object.freeze(varintTable)
