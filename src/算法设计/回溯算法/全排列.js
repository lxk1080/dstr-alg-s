/**
 * @desc 全排列，回溯算法
 * @TC O(n!) 因为每次递归进去，再递归的次数都会少一次。n! = 1 * 2 * 3 *...* (n - 1) * n
 * @SC O(n) 递归的堆栈
 * @leetcode 46
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const res = []
  const deep = (path) => {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    nums.forEach((n) => {
      if (path.includes(n)) return
      deep([...path, n])
    })
  }
  deep([])
  return res
}
