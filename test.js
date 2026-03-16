const test = require('node:test');
const assert = require('node:assert');
const add = require('./index.js');

test('测试加法函数（含税费）', () => {
  assert.strictEqual(add(1, 2), 3.3); // 1+2+0.3=3.3
});