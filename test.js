const test = require('node:test');
const assert = require('node:assert');
const add = require('./index.js');

// 测试 add 函数
test('测试加法函数', () => {
  // 断言：1+2 应该等于 3
  assert.strictEqual(add(1, 2), 3);
  // 断言：0+0 应该等于 0
  assert.strictEqual(add(0, 0), 0);
});