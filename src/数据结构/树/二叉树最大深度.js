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
 * @desc 使用深度优先遍历，每次递归的时候带上对应的层级即可
 * @TC O(n) 这个 n 是二叉树上的节点数量
 * @SC O(n) || O(logN) 所占空间是递归的嵌套深度，n 是树中的节点数量
 *  - 最好的情况是 O(logN)，也就是二叉树整整齐齐的时候，最坏的情况是 O(n)，这时二叉树就一条线
 * @leetcode 104
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
  let res = 0
  const deepFirst = (root, level) => {
    if (!root) return
    // 为叶子节点的时候才计算最大深度，遇到叶子节点说明当前这条线已经走完
    if (!root.left && !root.right) {
      res = Math.max(res, level)
    } else {
      ;[root.left, root.right].forEach((child) => {
        child && deepFirst(child, level + 1)
      })
    }
  }
  deepFirst(root, 1)
  return res
}
