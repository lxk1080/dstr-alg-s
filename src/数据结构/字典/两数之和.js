/**
 * @desc 这道题可以用 Map 也可以用对象来存储数据，重要的是解决这道题的思路
 *  - 我们要把这个方法看成婚姻介绍所！其中 record 是登记簿，record 里面的每个元素看作找对象的人，而 target 则是两个人之间的匹配条件
 *  - 这样子每进来一个人找对象，先描述条件，我们去看登记簿里面有没有，有的话就匹配上编号，没有的话先登记上，给个编号，后面再说
 * @TC O(n) 一个 for 循环
 * @SC O(n) 一个登记簿
 * @leetcode 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const record = new Map()
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    const want = target - current
    if (record.has(want)) {
      return [record.get(want), i]
    } else {
      record.set(current, i)
    }
  }
}

/**
 * @desc 这一题如果给出的数组，里面的数字是递增的，可以用下面的算法（仅适用于递增数组！）
 *  - 先让最小的数字和最大的数字想加
 *  - 如果大于目标值，右指针往左移一位，也就是让数字小点
 *  - 如果小于目标值，左指针往右移一位，也就是让数字大点
 *  - 到最后，如果左右指针相交了，说明找不到了
 * @TC O(n) 最坏的情况需要遍历数组中所有数字
 * @SC O(1) 固定变量，这也是比上面算法更好的原因，不需要额外的空间
 */
function liangshuzhihe(arr, target) {
  let lowIndex = 0
  let higIndex = arr.length - 1
  while (lowIndex < higIndex) {
    const he = arr[lowIndex] + arr[higIndex]
    if (he > target) {
      higIndex -= 1
    } else if (he < target) {
      lowIndex += 1
    } else {
      return [lowIndex, higIndex]
    }
  }
  return []
}
