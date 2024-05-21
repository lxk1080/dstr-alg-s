/**
 * @desc 用双指针维护一个滑动窗口，一开始都处于初始位置 0，我们要把这里的指针看作 _ 不要看作 |，指针是索引位置
 *  - 其中右指针不断右移，右移后如果发现窗口内字符重复，则左指针移动到处于前方的重复字符的下一位
 *  - 此时记录下窗口内字符串长度并和上一次获取的长度对比获取最大值
 *  - 最后记录下右指针经过的每一个字符，和其对应的位置，以供判断是否重复
 * @TC O(n) 一个 for 循环，n 是字符串的长度，字符串内有重复的字符
 * @SC O(m) 一个 Map 集合，记录着非重复的字符和其对应的位置
 * @leetcode 3
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  // 左指针
  let left = 0
  // 结果
  let res = 0
  // 保存右指针经过的值和其对应位置
  const map = new Map()
  // 右指针逐渐右移
  for (let right = 0; right < s.length; right++) {
    // 如果当前右指针指向的字符已经存在，并且这个已经存在的字符，它的位置不能在左指针的前面（也就是说它必须要在窗口内，例如 abba 的情况）
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      // 左指针右移到这个已经存在的字符位置的下一位
      left = map.get(s[right]) + 1
    }
    // 计算窗口内字符串的长度，并和之前的相比，获取最大值
    res = Math.max(res, right - left + 1)
    // 右指针经过的字符，保存字符和其位置，遇到重复的会更新位置
    map.set(s[right], right)
  }
  return res
}
