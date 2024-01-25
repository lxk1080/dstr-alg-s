const { binaryTree } = require('./tree')

/**
 * @desc 先序遍历，根-左-右
 */
const preOrder = (root) => {
  if (!root) return
  console.log(root.val)
  preOrder(root.left)
  preOrder(root.right)
}

/**
 * @desc 中序遍历，左-根-右
 */
const inOrder = (root) => {
  if (!root) return
  inOrder(root.left)
  console.log(root.val)
  inOrder(root.right)
}

/**
 * @desc 后序遍历，左-右-根
 */
const postOrder = (root) => {
  if (!root) return
  postOrder(root.left)
  postOrder(root.right)
  console.log(root.val)
}

/**
 * @desc 深度优先，可以看到：深度优先 === 先序遍历，符合顺序：根-左-右
 *  - 先序遍历是有着非递归写法的，也就是说这个深度优先可以不用递归
 *  - 非递归写法就是把下面的广度优先算法中的 shift 改为 pop（也就是把队列改为栈），栈是后进先出的，把推入 left 和 right 的顺序换一下即可
 *  - 具体写法可以看另一个文件（二叉树的先中后序遍历_非递归.js）
 */
const deepFirst = (root) => {
  if (!root) return
  console.log(root.val)
  ;[root.left, root.right].forEach((child) => {
    deepFirst(child)
  })
}

/**
 * @desc 广度优先，把 left 和 right 分别加进队列
 */
const scopeFirst = (root) => {
  const queue = []
  queue.push(root)
  while (queue.length) {
    const item = queue.shift()
    console.log(item.val)
    if (item.left) queue.push(item.left)
    if (item.right) queue.push(item.right)
  }
}

/**
 * @desc 测试代码
 */

// 先序遍历
// preOrder(binaryTree) // 1 2 4 5 3 6 7

// 中序遍历
// inOrder(binaryTree) // 4 2 5 1 6 3 7

// 后序遍历
// postOrder(binaryTree) // 4 5 2 6 7 3 1

// 深度优先 === 先序遍历
// deepFirst(binaryTree) // 1 2 4 5 3 6 7

// 广度优先
scopeFirst(binaryTree) // 1 2 3 4 5 6 7
