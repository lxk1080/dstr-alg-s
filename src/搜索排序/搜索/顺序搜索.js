/**
 * @desc 顺序搜索
 */
Array.prototype.sequentialSearch = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item) return i
  }
  return -1
}

/**
 * @desc 测试代码
 */

const arr = ['a', 'b', 'c', 'd', 'e']
console.log(arr.sequentialSearch('c'))
console.log(arr.sequentialSearch('f'))
