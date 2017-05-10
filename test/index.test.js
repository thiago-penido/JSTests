const test = require('ava')
const indexModule = require('../index')

test('Multiply the meaning of life', (t) => {
  t.is(indexModule(), 84)
})
