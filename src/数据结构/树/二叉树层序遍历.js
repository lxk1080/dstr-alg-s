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
 * @desc 广度优先遍历带层级
 *  - 遍历时根据节点所在的层级数放到与之对应的数组中
 * @TC O(n) 这个 n 是树的节点总数
 * @SC O(n) 同上
 * @leetcode 102
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder_1 = function(root) {
    if (!root) return []
    const res = []
    const queue = [[root, 0]]
    while (queue.length) {
      const [item, level] = queue.shift()
      if (!res[level]) res[level] = []
      res[level].push(item.val)
      ;[item.left, item.right].forEach((child) => {
        child && queue.push([child, level + 1])
      })
    }
    return res
}

/**
 * @desc 广度优先遍历分层级遍历
 *  - 给相同层级的元素计数，每遍历完一个元素，计数减 1，当此层级的元素全部遍历完（此时计数为 0 了），再进入下一层遍历
 * @TC O(n) 这个 n 是树的节点总数，和上面的算法是一样的
 * @SC O(n) 同上
 * @leetcode 102
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder_2 = function(root) {
  if (!root) return []
  const res = []
  const queue = [root]
  while (queue.length) {
    let len = queue.length
    res.push([])
    while (len--) {
      const item = queue.shift()
      res[res.length - 1].push(item.val)
      ;[item.left, item.right].forEach((child) => {
        child && queue.push(child)
      })
    }
  }
  return res
}
