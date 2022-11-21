import { assert, expect, test } from 'vitest'

// Edit an assertion and save to see HMR in action

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(4)
})

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world'
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"foo":"hello","bar":"world"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})
