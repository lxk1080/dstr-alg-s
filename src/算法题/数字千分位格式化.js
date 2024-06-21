/**
 * @desc 对数字进行千分位格式化
 *  有很多种方法（下面方法的运算速度由慢到快）：
 *    1. 使用正则表达式，这个方法工作中最常用，但是性能最差，作为算法来说，不可取
 *    2. 使用数组，性能也不太行，调用方法太多
 *    3. 使用字符串，比数组实现要好，只有字符之间的拼接
 *    4. 使用数学运算，省去了对字符串的遍历，又要更快一点
 */

// 正则
function formatNumber1(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// 数组
function formatNumber2(num) {
  return num.toString().split('').reverse().reduce((prev, cur, index) => {
    return (index !== 0 && index % 3 === 0) ? cur + ',' + prev : cur + prev
  }, '')
}

// 字符串
function formatNumber3(num) {
  const numStr = num + ''
  const len = numStr.length
  let res = ''
  for (let i = len - 1; i >= 0; i--) {
    let count = len - i
    if (i !== 0 && count % 3 === 0) {
      res = ',' + numStr[i] + res
    } else {
      res = numStr[i] + res
    }
  }
  return res
}

// 运算符
function formatNumber4(num) {
  let res = ''
  let n = num
  while (n > 0) {
    let remainder = n % 1000
    n = Math.floor(n / 1000)
    const prefix = n === 0 ? '' : ','
    const char = n === 0 ? remainder : (remainder + '').padStart(3, '0')
    res = prefix + char + res
  }
  return res
}

/**
 * 测试代码
 */

const num = 10123456789

console.log(formatNumber1(num))
console.log(formatNumber2(num))
console.log(formatNumber3(num))
console.log(formatNumber4(num))

/**
 * 性能测试
 */

console.time('formatNumber1')
for (let i = 0; i < 10 * 10000; i++) {
  formatNumber1(num)
}
console.timeEnd('formatNumber1')

console.time('formatNumber2')
for (let i = 0; i < 10 * 10000; i++) {
  formatNumber2(num)
}
console.timeEnd('formatNumber2')

console.time('formatNumber3')
for (let i = 0; i < 10 * 10000; i++) {
  formatNumber3(num)
}
console.timeEnd('formatNumber3')

console.time('formatNumber4')
for (let i = 0; i < 10 * 10000; i++) {
  formatNumber4(num)
}
console.timeEnd('formatNumber4')
