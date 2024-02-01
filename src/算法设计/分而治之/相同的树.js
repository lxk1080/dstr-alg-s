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
 * @leetcode 100
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  if (!p && !q) return true
  return !!(
    p && q && p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  )
}
