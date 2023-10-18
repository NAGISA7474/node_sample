// モジュールの読み込み
const itemModule = require('./items')
const controlModule = require('./control')

var items = itemModule.items
controlModule.show(items)
