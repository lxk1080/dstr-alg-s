/**
 * @desc 在 js 中，instanceOf 的实现原理就是顺着 __proto__ 往上找，本质就是链表结构
 *  - 这里顺便说一句：我们写的方法是可以判断数字、字符串等基本类型的，实际上 js 自带的 instanceOf 是无法判断这些字面量的基本类型的（即使顺着原型链能找到）
 */

const myInstanceOf = (A, B) => {
  let p = A
  while (p) {
    if (p === B.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}

/**
 * @测试代码
 */

console.log(myInstanceOf(123, Number))
console.log(myInstanceOf('qwer', String))
console.log(myInstanceOf([], Array))
console.log(myInstanceOf([], Object))
console.log(myInstanceOf({}, Object))
