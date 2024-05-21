/**
 * @desc
 *  - 时间复杂度：O(logN)，存在一个 while 循环，次数为 2 的幂次方
 *  - 空间复杂度：O(logN)，同上
 * @param num
 * @return {num}
 */
function convert(num) {
  let n = num
  let arr = []
  let res = ''
  while (n !== 0) {
    arr.push(n % 2)
    n = n >> 1
  }
  while (arr.length) {
    res += arr.pop()
  }
  return +res
}

console.log(convert(35))
