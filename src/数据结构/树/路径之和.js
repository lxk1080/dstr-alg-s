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
 * @desc 先序遍历，在二叉树中，先序遍历顺序 等同于 深度优先遍历顺序，但是经过测试，先序遍历跑的没有深度优先快
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function(root, targetSum) {
//     if (!root) return false
//     const stack = [[root, 0]]
//     while (stack.length) {
//         const [item, lastSum] = stack.pop()
//         const newSum = item.val + lastSum
//         if (!item.left && !item.right && newSum === targetSum) {
//             return true
//         } else {
//             if (item.right) stack.push([item.right, newSum])
//             if (item.left) stack.push([item.left, newSum])
//         }
//     }
//     return false
// }

/**
 * @desc 深度优先，每次递归的时候给出上一次计算的总和，以供到下一层计算
 *  - 这地方注意一下，因为是在递归里面，为 true 的时候不能直接 return
 * @TC O(n) 这个 n 是 节点数
 * @SC O(n) || O(logN) 分最好和最坏的情况，最好情况是 O(logN)，最坏情况是 O(n)
 * @leetcode 112
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function(root, targetSum) {
  if (!root) return false
  let res = false
  const deepFirst = (root, lastSum) => {
    const newSum = root.val + lastSum
    if (!root.left && !root.right && newSum === targetSum) {
      res = true
    } else {
      if (root.left) deepFirst(root.left, newSum)
      if (root.right) deepFirst(root.right, newSum)
    }
  }
  deepFirst(root, 0)
  return res
}
