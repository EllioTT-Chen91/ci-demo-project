// 修复后（正确）
function add(a, b) {
  const tax = (a + b) * 0.1;
  return a + b + tax; // ✅ 改回 + 号
}
module.exports = add;