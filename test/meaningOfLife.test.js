const test = require('ava')
const bola = require('../lib/meaningOfLife')

test('Real meaning of life', (t) => {
  t.is(bola(), 42)
})
