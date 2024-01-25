const { binaryTree } = require('./tree')

/**
 * @desc 先序遍历，根-左-右，这个顺序是树中元素标准的查找顺序，从根节点开始，从上往下，从左往右
 *  - 事实上无论怎么遍历，都必须从 root 开始往下找，而每找到一个元素，其实就是子 root，根排在第一位，所以直接打出来
 *  - 这里注意一点：由于栈是后进先出，所以我们需要把 left 放在后面加进去，以保证 left 在 right 前面执行
 *  - 对于：根-右-左，这样的顺序，也是同样的思路，调换一下入栈顺序即可
 *  - 对于这个算法你会发现：把 pop 方法换成 shift 方法（也就是把栈换成队列），该算法就会变成广度优先遍历（只不过方向是从右到左，调整下推入顺序即可）
 */
const preOrder = (root) => {
  const stack = [root]
  while (stack.length) {
    const item = stack.pop()
    console.log(item.val)
    if (item.right) stack.push(item.right)
    if (item.left) stack.push(item.left)
  }
}

/**
 * @desc 中序遍历，左-根-右，这个顺序刚好符合栈后进先出的特性，因为我们只能从 root 开始往下找，而找到的最后一个 left 就是应该第一个打出来的值
 *  - 首先，我们需要创建一个指针 p，初始化指向 root
 *  - 1、不断的推入 left，直到 left 不存在
 *  - 2、弹出栈顶的元素，打印出其值
 *    - 第一次弹出的元素，就是树的最左下方的元素（这个元素一定没有 left 元素，可能会有 right 元素）
 *    - 后续弹出的元素
 *      - 如果第一次弹出的元素没有 right 元素，那么这次弹出的元素就是第一次弹出元素的父元素
 *      - 反之，这次弹出的元素就是这个 right 元素
 *  - 3、如果弹出的元素有 right 元素，就将此 right 元素推入栈
 *  - 4、如果 right 元素入栈了，就走步骤 1，反之就走步骤 2
 *  - 不断的循环上面的 (1 || 2)、3、4 步骤，直到栈空
 *  - 对于：右-根-左，这样的顺序，也是同样的方法，换下参数即可
 */
const inOrder = (root) => {
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const item = stack.pop()
    console.log(item.val)
    if (item.right) {
      p = item.right
    }
  }
}

/**
 * @desc 后序遍历，左-右-根
 *  - 从树的结构来看，我们从上往下查找的路径是：
 *    - 从左开始找：
 *      - 正序：根-左
 *      - 倒序：左-根
 *    - 从右开始找：
 *      - 正序：根-右
 *      - 倒序：右-根
 *  - 上面这些顺序都可以通过进栈出栈走完全部
 *    - 究其本质是因为，相对于不同的元素来说，一个元素既可以是左，也可以是根，或者，既可以是右，也可以是根
 *    - 但是无论怎么相对，一个元素不可能：既是左，又是右
 *  - 而后续遍历顺序是：左-右，这两个连在一起，进栈出栈是无法完成角色变换的
 *  - 但是我们知道后序遍历的完整顺序是：左-右-根，右是连接着根的，我们可以先排成：根-右-左，然后倒过来就可以了
 *  - 对于：右-左-根，这样的顺序，也是同样的解法，先排成：根-左-右，然后倒过来
 */
const postOrder = (root) => {
  const cacheStack = []
  const stack = [root]
  while (stack.length) {
    const item = stack.pop()
    cacheStack.push(item.val)
    if (item.left) stack.push(item.left)
    if (item.right) stack.push(item.right)
  }
  while (cacheStack.length) {
    console.log(cacheStack.pop())
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
postOrder(binaryTree) // 4 5 2 6 7 3 1
