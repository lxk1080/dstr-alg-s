/**
 * Definition for a Node.
 * @param val
 * @param neighbors
 * @constructor
 */
function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val
   this.neighbors = neighbors === undefined ? [] : neighbors
}

/**
 * @desc 深度优先，使用 Map 排除已访问，同时存储克隆的节点
 * @TC O(n) 这个 n 是节点总数
 * @SC O(n) 同上
 * @leetcode 133
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph_deep = function(node) {
    if (!node) return null
    const visited = new Map()
    const dfs = (node) => {
        const copyNode = new Node(node.val)
        visited.set(node, copyNode)
        node.neighbors.forEach((subNode) => {
            if (!visited.has(subNode)) {
                dfs(subNode)
            }
            copyNode.neighbors.push(visited.get(subNode))
        })
    }
    dfs(node)
    return visited.get(node)
}

/**
 * @desc 广度优先，使用 Map 排除已访问，同时存储克隆的节点
 * @TC O(n) 这个 n 是节点总数
 * @SC O(n) 同上
 * @leetcode 133
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph_scope = function(node) {
  if (!node) return null
  const queue = [node]
  const cache = new Map()
  cache.set(node, new Node(node.val))
  while (queue.length) {
    const item = queue.shift()
    item.neighbors.forEach((subNode) => {
      if (!cache.has(subNode)) {
        queue.push(subNode)
        cache.set(subNode, new Node(subNode.val))
      }
      cache.get(item).neighbors.push(cache.get(subNode))
    })
  }
  return cache.get(node)
}
