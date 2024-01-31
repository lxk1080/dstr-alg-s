/**
 * @desc 快速排序
 */
const quickSort = (arr) => {
  const dfs = (arr) => {
    if (arr.length <= 1) return arr
    const target = arr.shift()
    const left = []
    const right = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= target) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...dfs(left), target, ...dfs(right)]
  }
  const res = dfs(arr)
  res.forEach((val, index) => arr[index] = val)
  return arr
}

/**
 * @desc 测试代码
 */

const arr = [3, 2, 5, 4, 7, 1, 9, 6, 8]
console.log(quickSort(arr))
