/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('@jest/globals');
const { add } = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

