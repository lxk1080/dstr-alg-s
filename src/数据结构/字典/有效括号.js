/**
 * @desc 对之前使用栈解的优化，加入了 Map 映射，让两个 if 判断看起来更加简洁了，其它都没变
 *  - 时间复杂度：O(n)，存在一个 for 循环，n 就是 s.length
 *  - 空间复杂度：O(n)，存在 stack 数组，最大也是 s.length
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (s.length % 2 === 1) return false
  const stack = []
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ])
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (map.has(c)) {
      stack.push(c)
    } else {
      const p = stack[stack.length - 1]
      if (map.get(p) === c) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
