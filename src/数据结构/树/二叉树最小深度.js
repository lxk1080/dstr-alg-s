// noinspection JSValidateJSDoc

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @desc 使用深度优先遍历，要遍历完所有子节点，才能得到最小深度
 * @param {TreeNode} root
 * @return {number}
 */
// const minDepth = function(root) {
//     if (!root) return 0
//     let res = Infinity
//     const deepFirst = (root, level) => {
//       if (!root) return
//       // 如果是叶子节点，拿到更小值，在遍历完所有的叶子节点后，可以得到最小值
//       if (!root.left && !root.right) {
//         res = Math.min(res, level)
//       } else {
//         ;[root.left, root.right].forEach((child) => {
//             child && deepFirst(child, level + 1)
//         })
//       }
//     }
//     deepFirst(root, 1)
//     return res
// }

/**
 * @desc 使用广度优先遍历，只要遇到了叶子节点，就直接返回其层级即可
 *  - 这个地方使用数组包装了下层级，这个技巧要留意下，以后需要的时候可以使用
 * @TC O(n) 最坏的情况下是 O(n)，n 就是树中的节点数量
 * @SC O(n) 同上
 * @leetcode 111
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function(root) {
  if (!root) return 0
  const queue = [[root, 1]]
  while (queue.length) {
    const [item, level] = queue.shift()
    // 因为是一层一层往下找的，所以只要遇到叶子节点，就必定是最小深度
    if (!item.left && !item.right) {
      return level
    } else {
      ;[item.left, item.right].forEach((child) => {
        child && queue.push([child, level + 1])
      })
    }
  }
}
