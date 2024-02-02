/**
 * @desc 贪心算法
 *  - 必须先排序，才能保证分发的顺序
 *  - 一个孩子分到了，接着给下一个孩子分
 *  - 这里，因为已经分到的孩子数量 count 和孩子的索引值是一样的，所以直接用 count 作为孩子的索引了
 * @TC O(nlogN) 这个 n 是饼干或孩子的数量，大概，whatever！主要是因为用了排序
 * @SC O(1) 固定变量
 * @leetcode 455
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
  // 先将 “较小的饼干” 分配给 “胃口最小” 的孩子
  const sortFunc = (a, b) => a - b
  g.sort(sortFunc)
  s.sort(sortFunc)
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[count]) {
      count++
    }
  }
  return count
}
