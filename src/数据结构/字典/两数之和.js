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
