/**
 * @desc 理解了逻辑，就是斐波那契，但要注意根据题目描述，索引 0 处的值是 1
 * @TC O(n) 这个 n 就是代码里的 n
 * @SC O(1) 固定变量
 * @leetcode 70
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  // 公式：F(n) = F(n - 1) + F(n - 2)
  let p0 = 1
  let p1 = 1
  for (let i = 2; i <= n; i++) {
    const p2 = p0 + p1
    p0 = p1
    p1 = p2
  }
  return p1
}
