const MinHeap = require('./最小堆类')

/**
 * @desc 这道题的第一想法就是利用 js 自带的排序来解
 * @TC O(n * logN) 指的就是这个 sort 方法的时间复杂度
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
 *  - 注意：这个地方可能会产生一个误区
 *    - 误认为最小堆中的 K 个数是所有数中最小的 K 个，但其实是最大的 K 个，因为每次淘汰掉的都是最小的，最后只剩下 K 个最大的，而堆顶则是 K 个中最小
 *    - 也就是说，最小堆中留下的都是最大的（其中堆顶最小），那么反之，最大堆中留下的都是最小的（其中堆顶最大）
 *    - 所以这道题，我们要找第 K 大，也就是说要留下最大的 K 个，所以要用最小堆
 *    - 如果我们要找第 K 小，那就要用最大堆了，淘汰掉的都是堆中最大的，留下的都是最小的 K 个，而堆顶最大，也就是第 K 小
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
