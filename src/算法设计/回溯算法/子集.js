/**
 * @desc 子集，回溯算法
 * @TC O(n!) 根据死路的条件，递归次数每次都要更少
 * @SC O(n) 递归堆栈
 * @leetcode 78
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  const res = []
  const deep = (path) => {
    res.push(path)
    if (path.length === nums.length) return
    nums.forEach((n) => {
      if (path.length && n <= path[path.length - 1]) return
      deep([...path, n])
    })
  }
  deep([])
  return res
}
