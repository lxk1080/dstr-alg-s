const MinHeap = require('./最小堆类')

/**
 * @desc 这道题的第一想法就是利用 js 自带的排序来解
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// const findKthLargest = function(nums, k) {
//   const sortNums = nums.sort((a, b) => a - b)
//   return sortNums[sortNums.length - k]
// }

/**
 * @desc 利用最小堆来解，不断的插入，当长度大于 K 时，删除堆顶，因为堆是有序的，到最后，堆顶是最小的，也就是第 K 大
 *  - 这个解法在 leetcode 上由于某些用例执行会超出时间限制，所以 leetcode 上还是使用的上面一种方法
 * @TC O(n * logK) 这个 n 是数组的长度，K 是堆的大小，也就是参数 k
 * @SC O(K) 这个 K 是堆的大小，也就是参数 k
 * @leetcode 215
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
  const heap = new MinHeap()
  nums.forEach((num) => {
    heap.insert(num)
    if (heap.size() > k) {
      heap.pop()
    }
  })
  return heap.peek()
}
