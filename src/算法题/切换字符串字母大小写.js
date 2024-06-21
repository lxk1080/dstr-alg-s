/**
 * @desc 切换字符串字母大小写
 *  转换思路：
 *    1. 使用正则表达式的话，效率很低
 *    2. 使用 ASCII 码，既好判断，也好转换，推荐！
 *        - 其中 65 ~ 90 是大写字母，97 ~ 122 是小写字母
 */

// 正则
function changeLetterCase1(str) {
  let res = ''
  const lower = /[a-z]/
  const upper = /[A-Z]/
  for (let i = 0; i < str.length; i++) {
    let tmp = str[i]
    if (lower.test(str[i])) {
      tmp = str[i].toUpperCase()
    }
    if (upper.test(str[i])) {
      tmp = str[i].toLowerCase()
    }
    res = res + tmp
  }
  return res
}

// ASCII 码
function changeLetterCase2(str) {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    let tmp = str[i]
    const charCode = str.charCodeAt(i)
    if (charCode >= 65 && charCode <= 90) {
      tmp = String.fromCharCode(charCode + 32)
    } else if (charCode >= 97 && charCode <= 122) {
      tmp = String.fromCharCode(charCode - 32)
    }
    res = res + tmp
  }
  return res
}

/**
 * 测试代码
 */

console.log(changeLetterCase1('123AbCde456xYz'))
console.log(changeLetterCase2('123AbCde456xYz'))
console.log(changeLetterCase2('100#$'))

/**
 * 性能测试
 */

console.time('RegExp')
for (let i = 0; i < 10 * 10000; i++) {
  changeLetterCase1('123AbCde456')
}
console.timeEnd('RegExp')

console.time('ASCII')
for (let i = 0; i < 10 * 10000; i++) {
  changeLetterCase2('123AbCde456')
}
console.timeEnd('ASCII')
