/**
 * @desc 动态规划，先推导公式，后写代码
 * @TC O(n) 这个 n 是 nums 的长
 * @SC O(1) 固定变量
 * @leetcode 198
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  // 公式：f(k) = Math.max(f(k - 2) + Ak, f(k - 1))
  if (!nums.length) return 0
  let p0 = 0
  let p1 = nums[0]
  for (let i = 2; i <= nums.length; i++) {
    const p2 = Math.max(p0 + nums[i - 1], p1)
    p0 = p1
    p1 = p2
  }
  return p1
}
