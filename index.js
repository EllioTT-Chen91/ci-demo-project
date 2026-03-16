// 小李想实现：a+b + 10%税费，却写成减税费
function add(a, b) {
  const tax = (a + b) * 0.1; // 税费计算逻辑正确
  return a + b - tax; // 关键bug：+tax 写成 -tax
}
module.exports = add;