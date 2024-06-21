/**
 * @desc 获取字符串中连续最多的字符和次数
 *  - 这道题一眼看上去就是使用双指针
 *  - 具体怎么做？
 *    - 定义 left 和 right 指针
 *    - 开始时 left 指针指向第一个字符，向右移动右指针
 *    - 如果右指针指向的值不等于左指针指向的值，则获取左指针指向字符的连续长度
 *    - 然后移动左指针到右指针的位置，循环操作
 *  - 有个需要注意的点！
 *    - 如果连续最多的字符在最右侧，那么为了得到 “右指针指向的值不等于左指针指向的值” 这个条件
 *    - 我们要将右指针一直移动到字符串之外，得到的 undefined 肯定不与任何字符相等
 */

function countCalc(str) {
  const res = {
    char: '',
    count: 0,
  }
  let left = 0
  let pointChar = str[0]
  for (let right = 1; right <= str.length; right++) {
    const char = str[right]
    if (char !== pointChar) {
      const count = right - left
      if (count > res.count) {
        res.count = count
        res.char = pointChar
      }
      left = right
      pointChar = str[left]
    }
  }
  return res
}

/**
 * 测试代码
 *  - 可以单元测试
 */

console.log(countCalc('aaabbbbccdddeee'))
console.log(countCalc('aaabbbbccdddeeeee'))
console.log(countCalc('abcde'))
console.log(countCalc(''))
