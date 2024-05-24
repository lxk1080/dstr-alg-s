/**
 * @desc 主要是利用图这个数据结构，难点就在于这个图该怎么画，图一旦有了，解决就简单了（图号：23）
 *  - 0、1、2、3、4、5、6、7 是字符串的状态，根据不同的条件，走到下一个状态，判断最终状态即可
 *  - 如果走不到下一个状态，直接判定为不是数字即可
 * @TC O(n) 这个 n 是字符串的长度
 * @SC O(1) 都是些固定的变量
 * @leetcode 65
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function(s) {
  const graph = {
    0: {
      blank: 0,
      number: 6,
      dot: 2,
      sign: 1,
    },
    1: {
      number: 6,
      dot: 2,
    },
    2: {
      number: 3
    },
    3: {
      number: 3,
      e: 4,
    },
    4: {
      number: 5,
      sign: 7,
    },
    5: {
      number: 5,
    },
    6: {
      number: 6,
      dot: 3,
      e: 4,
    },
    7: {
      number: 5,
    },
  }
  const getTypeFromChar = (s) => {
    if (s === ' ') return 'blank'
    if (/[0-9]/.test(s)) return 'number'
    if (s === '.') return 'dot'
    if (s === '+' || s === '-') return 'sign'
    if (s === 'e' || s === 'E') return 'e'
    return 'unknown'
  }
  let status = 0
  for (let i = 0; i < s.length; i++) {
    const type = getTypeFromChar(s[i])
    status = graph[status][type]
    if (status === undefined) {
      return false
    }
  }
  return [3, 5, 6].includes(status)
}
