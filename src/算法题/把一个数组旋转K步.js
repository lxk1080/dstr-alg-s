/**
 * @desc 把一个数组旋转 K 步
 *  例如：
 *  给出数组：[1, 2, 3, 4, 5, 6, 7]
 *  旋转 1 步，最后结果是 [7, 1, 2, 3, 4, 5, 6]
 *  旋转 2 步，最后结果是 [6, 7, 1, 2, 3, 4, 5]
 *  旋转 3 步，最后结果是 [5, 6, 7, 1, 2, 3, 4]
 */

/**
 * @TC: O(n^2) 主要在于 unshift 操作的时间复杂度也是 O(n)，一般来讲，时间复杂度是 O(n^2) 的算法，是不可用的
 * @SC: O(1) 变量固定
 */
function rotate1(arr, k) {
  const len = arr.length
  if (!len || !k) return arr
  const step = k % len // 如果旋转的步数是数组的长度，则数组不变，所以这里取余数即可
  for (let i = 0; i < step; i++) {
    const item = arr.pop()
    if (item) {
      arr.unshift(item) // 耗时操作，每次前面插入一个，原来的元素都得往后退一步，类似的操作还有 shift 和 splice
    }
  }
  return arr
}

/**
 * @TC: O(1) 变量固定，slice 操作不耗时，根据前端重时间轻空间的原则，这个算法实现更好！
 * @SC: O(n) 产生了两个新数组，总长度为原来数组的长度
 */
function rotate2(arr, k) {
  const len = arr.length
  if (!len || !k) return arr
  const step = k % len
  const part1 = arr.slice(-step)
  const part2 = arr.slice(0, len - step)
  return part1.concat(part2)
}

/**
 * 测试代码
 */

console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3))
