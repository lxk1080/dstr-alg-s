/**
 * @desc 归并排序
 */
const mergeSort = (arr) => {
  const dfs = (arr) => {
    if (arr.length === 1) return arr
    const midIndex = arr.length >> 1
    const left = arr.slice(0, midIndex)
    const right = arr.slice(midIndex, arr.length)
    const orderLeft = dfs(left)
    const orderRight = dfs(right)
    const res = []
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res
  }
  const res = dfs(arr)
  res.forEach((val, index) => arr[index] = val)
  return arr
}

/**
 * @desc 测试代码
 */

const arr = [3, 2, 5, 4, 7, 1, 9, 6, 8]
console.log(mergeSort(arr))
