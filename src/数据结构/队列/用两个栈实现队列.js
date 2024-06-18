/**
 * @desc 用两个栈实现队列
 *  为什么？
 *    在 js 里面，如果用数组直接模拟队列，需要使用 shift 方法出队，这个操作是非常耗时的，因为数组是连续的存储空间，
 *    在队列出队一个元素后，后面的元素都得往前面挪一位，所以我们可以用两个栈实现队列，只需要用到 push 和 pop 方法
 *  怎么做？
 *    新建两个队列 stack1 和 stack2，
 *    入队：
 *      stack1 做 push 操作
 *    出队分为 3 步：
 *      1. stack1 全部出栈到 stack2
 *      2. stack2 弹出栈顶
 *      3. stack2 全部出栈返回到 stack1
 */

class MyQueue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  add(item) {
    this.stack1.push(item)
  }

  out() {
    let res
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
    res = this.stack2.pop()
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop())
    }
    return res || null
  }

  get length() {
    return this.stack1.length
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
 *  - 并没有比 shift 更快，反而还慢了不少
 *  - 不过也合理，想象一下，如果 shift 需要时间 n，那么这种方式就需要时间 4n，主要是两次 push 和 pop 太耗时了
 *  - 只有当数据量很小的时候，stack 才比 shift 快，但是毫秒级别没有意义
 */

const time = 1000

console.time('queue-array')
const arr = []
for (let i = 0; i < time; i++) { arr.push(i) }
for (let i = 0; i < time; i++) { arr.shift() }
console.timeEnd('queue-array') // 0.3 ms

console.time('queue-stack')
for (let i = 0; i < time; i++) { q.add(i) }
for (let i = 0; i < time; i++) { q.out() }
console.timeEnd('queue-stack') // 12.7 ms
