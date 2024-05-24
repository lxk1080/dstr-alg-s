const { graph } = require('./graph')

/**
 * @desc 深度优先，与树的不同就在于：必须是未访问过的节点才能进入到下一个递归
 * @param graph 整个图的数据
 * @param entry 入口，因为图中有回路，从不同的入口进入都有可能访问到全部节点
 */
const deepFirst = (graph, entry) => {
  const visited = new Set()
  const deep = (node) => {
    visited.add(node)
    console.log(node)
    graph[node].forEach((joinNode) => {
      if (!visited.has(joinNode)) deep(joinNode)
    })
  }
  deep(entry)
}

/**
 * @desc 广度优先
 *  - 注意：这里建立的已访问集合为 pushed，而不是 visited，意思是已推入，而不是已访问
 *  - 如果这里像深度优先一样在访问节点后将节点加入到已访问集合，那么可能会重复访问，因为可能会在访问前，重复进入队列
 *  - 为什么深度优先不需要关注这个问题？
 *    - 深度优先使用的是递归，forEach 一个节点后，就会一直递归这个节点，直到这个节点递归结束，再 forEach 到下一个节点
 *    - 而广度优先是一次性加入到队列，再按顺序访问，但是期间可能会因为访问一个节点而衍生出另一个入队的节点，这个入队的节点可能在之前已经加入过队列，就会造成重复
 *   - 为什么树的广度优先不需要关注这个问题？
 *    - 因为树不存在回路，找到的节点都是之前未出现过的，不会重复
 * @param graph 整个图的数据
 * @param entry 入口，因为图中有回路，从不同的入口进入都有可能访问到全部节点
 */
const scopeFirst = (graph, entry) => {
  const queue = [entry]
  const pushed = new Set([entry])
  while (queue.length) {
    const item = queue.shift()
    console.log(item)
    graph[item].forEach((joinNode) => {
      if (!pushed.has(joinNode)) {
        queue.push(joinNode)
        pushed.add(joinNode)
      }
    })
  }
}

/**
 * @desc 测试代码
 */

// 深度优先
// deepFirst(graph, 2) // 2 0 1 3

// 广度优先
scopeFirst(graph, 2) // 2 0 3 1
