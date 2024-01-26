/**
 * @desc 获取 json 数据的节点值，这个方法之前写过，叫获取不定层级值，这里利用类似链表的遍历重新写一遍
 * @desc 可以看到这种写法比较优雅，也更清晰，有需要可以使用
 */

Object.prototype.getJsonNode = function (path) {
  let p = this
  while (p && path.length) {
    const nodeText = path.shift()
    p = p[nodeText]
  }
  return p
}

/**
 * @desc 测试代码
 */

const json = {
  a: { b: { c: { d: 1 }}},
  e: { f: { g: 'qwer' }}
}

console.log(json.getJsonNode(['a', 'b', 'c', 'd']))
console.log(json.getJsonNode(['e', 'f', 'g', 'length']))
