/**
 * @desc 用链表实现队列
 *  为什么？
 *    一般我们会用数组来模拟队列，但是数组的出队操作需要用到 shift，后面的元素都需要往前挪，时间复杂度很高，
 *    但是使用链表的话，只需要做 next 的变动即可，非常方便，无疑，用链表实现队列的方式更好
 *  怎么做？
 *    入队：
 *      链表最后一个节点追加 next
 *      更新最后一个节点为新加的节点
 *      长度 +1
 *    出队：
 *      记录当前 head 节点的值
 *      删除掉链表的第一个节点（将 head 指向下一个节点）
 *      长度 -1
 *      返回记录值
 */

class MyQueue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  add(item) {
    const node = this.createNode(item)
    if (!this.head && !this.tail) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }

  out() {
    if (!this.head) return null
    const res = this.head.value
    this.head = this.head.next
    if (!this.head) this.tail = null
    this.length--
    return res
  }

  createNode(item) {
    return {
      value: item,
      next: null,
    }
  }
}

/**
 * 测试代码
 */

const q = new MyQueue()

q.add(100)
q.add(200)
q.add(300)

console.log(q.length)

console.log(q.out())
console.log(q.out())
console.log(q.out())
console.log(q.out())

/**
 * 测试下性能
 *  - 确实比 shift 方法快了不少，尤其是在处理大数据量的时候，快的很明显
 *  - 只有在数据量为 10000 的时候，shift 更快，原因不明
 *  - 在数据量为 100W 的时候，shift 已经卡住了，而链表实现只要 100 ms 左右
 */

const time = 100000

console.time('queue-array')
const arr = []
for (let i = 0; i < time; i++) { arr.push(i) }
for (let i = 0; i < time; i++) { arr.shift() }
console.timeEnd('queue-array')

console.time('queue-linklist')
for (let i = 0; i < time; i++) { q.add(i) }
for (let i = 0; i < time; i++) { q.out() }
console.timeEnd('queue-linklist')
