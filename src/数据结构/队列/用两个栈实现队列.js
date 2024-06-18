/**
 * @desc 用两个栈实现队列
 *  为什么？
 *    在 js 里面，如果用数组直接模拟队列，需要使用 shift 方法出队，这个操作是非常耗时的，因为数组是连续的存储空间，
 *    在队列出队一个元素后，后面的元素都得往前面摞一位，所以我们可以用两个栈实现队列，只需要用到 push 和 pop 方法
 *  怎么做？
 *    新建两个队列 stack1 和 stack2，
 *    入队：
 *      stack1 做 push 操作
 *    出队分为 3 步：
 *      stack1 全部出栈到 stack2
 *      stack2 弹出栈顶
 *      stack2 全部出栈返回到 stack1
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
