/**
 * @desc 二分搜索
 */
Array.prototype.binarySearch = function (item) {
  let low = 0
  let high = this.length - 1
  while (low <= high) {
    const midIndex = low + high >> 1
    const midVal = this[midIndex]
    if (item === midVal) {
      return midIndex
    } else if (item > midVal) {
      low = midIndex + 1
    } else if (item < midVal) {
      high = midIndex - 1
    }
  }
  return -1
}

/**
 * @desc 测试代码
 */

const arr = [1, 2, 3, 4, 5]
console.log(arr.binarySearch(3))
console.log(arr.binarySearch(6))
