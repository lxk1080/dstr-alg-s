const { tree } = require('./tree')

/**
 * @desc 深度优先遍历
 *  - 就是一般的遍历思维，一条路走到黑，再回过头来走另一条路
 */
const deepFirst = (root) => {
  console.log(root.val)
  if (root.children) {
    root.children.forEach((child) => deepFirst(child))
  }
}

/**
 * @desc 深度优先遍历（非递归）
 *  - 使用栈即可，因为后进先出，注意要反序压栈
 */
const deepFirst2 = (root) => {
  const stack = [root]
  while(stack.length) {
    const item = stack.pop()
    console.log(item.val)
    if (item.children) {
      Array.from(item.children).reverse().forEach((child) => {
        stack.push(child)
      })
    }
  }
}

/**
 * @desc 广度优先遍历
 *  - 使用队列，先进先出，逐层的 children 慢慢排队，按顺序执行
 *  - 新建一个队列，把根节点入队
 *  - 只要队列有值，移出队头并访问
 *  - 把队头的 children 再挨个入队
 *  - 重复二三步，直到队列为空
 */
const scopeFirst = (root) => {
  const queue = [root]
  while (queue.length) {
    const item = queue.shift()
    console.log(item.val)
    if (item.children) {
      item.children.forEach((child) => {
        queue.push(child)
      })
    }
  }
}

/**
 * @desc 测试代码
 */

// 深度优先
deepFirst(tree)

// 深度优先（非递归）
// deepFirst2(tree)

// 广度优先
// scopeFirst(tree)
