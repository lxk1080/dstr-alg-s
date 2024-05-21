/**
 * @desc 双指针滑动窗口
 *  - 先把窗口右侧往右拉，直到窗口中包含了目标字符串的所有字符
 *  - 然后再把窗口左侧往右拉，把窗口拉到最小，确保这个最小的窗口中包含目标字符串的所有字符
 *  - 左侧窗口每次往右拉，都记录下字符串（记录和前一个相比更短的字符串）
 *  - 左侧窗口继续拉，发现此时不包含目标字符串的所有字符了，再继续拉右侧窗口，回到第一步，循环
 * @TC O(m+n) 两个循环，但是不重叠，m 是右侧移动次数，n 是左侧移动次数
 * @SC O(n) 是 Map 集合，存储目标字符串中所有非重复字符
 * @leetcode 76
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
  let res = ''
  // 左指针和右指针开始位置都是 0
  let left = 0
  // 用于存储目标字符串中的所有字符及需要出现的次数
  const map = new Map()
  for (let c of t) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1)
  }
  // 用于统计是否所有字符均已出现
  // 这里很重要，要用字符类型数判断，不要用字符长度判断（t.length），因为后面字符需要的次数会出现负数，用字符长度判断写的代码不好理解
  let needType = map.size
  // 开始移动右指针
  for (let right = 0; right < s.length; right++) {
    const c = s[right]
    // 右移后每出现一次，那么，需要的次数就减去 1，如果需要的次数为 0，说明这个类型就不需要了，类型减 1
    // 注意：右移过程中，同一类型的字符可能会出现很多次，那么这时类型需要数可能会是负数，这是正常的，后面左侧右移时会抵消（这里很重要，不要把负数处理没了）
    if (map.has(c)) {
      map.set(c, map.get(c) - 1)
      if (map.get(c) === 0) {
        needType -= 1
      }
    }
    // 当需要的类型为 0 时，说明右侧右移后所有需要的字符都已经出现在窗口了
    // 此时做左侧右移
    while (needType === 0) {
      // 左侧右移前，这个时候窗口是出现了所有字符的，我们拿到最短的那个
      const newStr = s.substring(left, right + 1)
      if (!res || res.length > newStr.length) res = newStr
      // 如果左侧即将要右移过去的字符是需要的，因为移过去就没了，所以需要数加 1，这个时候也会抵消之前可能出现的负数
      // 反正当需要数为 1 时，那么这个类型就是被需要的了，窗口中缺少字符，这时会跳出循环，继续走右侧右移
      const c2 = s[left]
      if (map.has(c2)) {
        map.set(c2, map.get(c2) + 1)
        if (map.get(c2) === 1) {
          needType += 1
        }
      }
      // 左侧右移过去
      left += 1
    }
  }
  return res
}
