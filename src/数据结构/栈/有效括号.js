/**
 * @desc 一开始判断长度不能是奇数，因为必须成双成对
 * @desc 后面使用栈，如果遇到左括号就进栈，如果遇到右括号就出栈一个，并与此右括号对比是否属于一对，如果是就没问题，继续比，不是就返回有问题
 * @desc 最后如果都没问题，栈会变成空栈
 * @leetcode 20
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (s.length % 2 === 1) return false
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c)
    } else {
      const p = stack.pop()
      if (
        p === '(' && c === ')' ||
        p === '{' && c === '}' ||
        p === '[' && c === ']'
      ) continue
      return false
    }
  }
  return stack.length === 0
}
