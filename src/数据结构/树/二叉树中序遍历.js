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
 * @desc 递归版本
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     if (!root) return []
//     const res = []
//     const deepInOrder = (root) => {
//         if (!root) return
//         deepInOrder(root.left)
//         res.push(root.val)
//         deepInOrder(root.right)
//     }
//     deepInOrder(root)
//     return res
// }

/**
 * @desc 非递归版本
 * @TC O(n) 树中节点的数量
 * @SC O(n) 同上
 * @leetcode 94
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  if (!root) return []
  const res = []
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const item = stack.pop()
    res.push(item.val)
    p = item.right
  }
  return res
}
