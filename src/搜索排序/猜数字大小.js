/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @desc 递归版本（分而治之设计思想）
 * @TC O(logN) 因为折半查找
 * @SC O(logN) 递归是不断堆栈的
 * @leetcode 374
 * @param {number} n
 * @return {number}
 */
// const guessNumber = function(n) {
//   const deep = ([low, high]) => {
//     if (low > high) return
//     const midVal = Math.floor((low + high) / 2)
//     const res = guess(midVal)
//     if (res === 0) {
//       return midVal
//     } else if (res === 1) {
//       return deep([midVal + 1, high])
//     } else {
//       return deep([low, midVal - 1])
//     }
//   }
//   return deep([1, n])
// }

/**
 * @desc 二分搜索，这种方法比递归版本的空间复杂度要小，推荐！
 * @TC O(logN) 因为折半查找
 * @SC O(1) 全是固定变量
 * @leetcode 374
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
  let low = 1
  let high = n
  while (low <= high) {
    // 注意这个地方，不要用位移运算符，它在处理位数超过 32 位的情况下，会发生问题
    const midVal = Math.floor((low + high) / 2)
    const res = guess(midVal)
    if (res === 0) {
      return midVal
    } else if (res === 1) {
      low = midVal + 1
    } else {
      high = midVal - 1
    }
  }
}
