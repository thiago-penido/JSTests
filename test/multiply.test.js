const test = require('ava')
const multiply = require('../lib/multiply')

test('Can multiply numbers', (t) => {
  t.is(multiply(10), 20)
})

test('Throws an exception when you try to multiply a non-number value', (t) => {
  t.throws(() => multiply('batata'), 'Only numbers can be multiplied!')
})
