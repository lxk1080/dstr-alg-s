/**
 * @desc 快速排序，但非递归实现
 *  - 这个也是突发奇想，因为任何递归都是可以使用循环实现的，所以咱们试试快速排序
 *  - 主要思路
 *    - 利用栈，后进先出的特性
 *    - 遇到的第一个长度为 1 的数组，里面的元素肯定是最小值
 *    - 依次记录即可
 */

function quickSort(arr) {
  const stack = [arr]
  const res = []
  while (stack.length) {
    const subArr = stack.pop()
    const len = subArr.length
    if (len <= 1) {
      if (len === 1) res.push(subArr[0])
      continue
    }
    const base = subArr.shift()
    const left = []
    const right = []
    for (let i = 0; i < subArr.length; i++) {
      if (subArr[i] < base) {
        left.push(subArr[i])
      } else {
        right.push(subArr[i])
      }
    }
    stack.push(right, [base], left)
  }
  return res
}

/**
 * 测试代码
 */

console.log(quickSort([2,7,9,3,4,8,6,5,1]))
