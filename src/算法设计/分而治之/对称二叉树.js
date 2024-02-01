/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @desc 分而治之设计思想
 * @TC O(n) 所有节点
 * @SC O(n) 递归了所有节点，最坏是 O(n)，最好是树的高度 O(h)，也就是 O(logN)
 * @leetcode 101
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
  if (!root) return true
  const isSame = (p, q) => {
    if (!p && !q) return true
    return !!(
      p && q && p.val === q.val &&
      isSame(p.left, q.right) &&
      isSame(p.right, q.left)
    )
  }
  return isSame(root.left, root.right)
}
