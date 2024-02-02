/**
 * @desc 贪心算法
 *  - 这道题能做的前提是：我能够 “穿越未来” 或 “回到过去”
 *  - 只要我知道第二天的价格比第一天高，我就一定能赚这个钱
 *  - 因为我需要获取明天的价格，所以条件语句要减 1
 * @TC O(n) 有一个 for 循环
 * @SC O(1) 固定变量
 * @leetcode 122
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let money = 0
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      money += prices[i + 1] - prices[i]
    }
  }
  return money
}
