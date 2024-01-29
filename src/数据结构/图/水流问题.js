/**
 * @desc 主要是通过图的指向特性和深度优先解决
 *  - 我们先分别取两个大洋逆流能到的位置，然后取两个大洋可到位置的交集，具体流程看下面的代码注释
 * @TC O(mn) 这个 m 和 n 就是矩阵的宽高
 * @SC O(mn) 同上
 * @leetcode 417
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = function(matrix) {
  // 特殊情况处理
  if (!matrix || !matrix[0]) return []

  // 为两个大洋分别建立矩阵，一开始所有位置都不能流入
  const m = matrix.length
  const n = matrix[0].length
  const flow1 = Array.from({ length: m }, () => new Array(n).fill(false))
  const flow2= Array.from({ length: m }, () => new Array(n).fill(false))

  // 关键步骤，递归判断，一个位置可流入后，判断它相邻的几个位置是否可以流入，如果可以就继续递归判断
  // 三个条件很重要，是关键点
  const dfs = (r, c, flow) => {
    flow[r][c] = true
    ;[[r-1, c], [r+1, c], [r, c-1], [r, c+1]].forEach(([nr, nc]) => {
      if (
        // 不能出边界
        nr >= 0 && nr < m &&
        nc >= 0 && nc < n &&
        // 没有流过的
        !flow[nr][nc] &&
        // 逆流而上的
        matrix[nr][nc] >= matrix[r][c]
      ) {
        dfs(nr, nc, flow)
      }
    })
  }

  // 初始化流入点
  for (let i = 0; i < m; i++) {
    dfs(i, 0, flow1) // 左侧
    dfs(i, n - 1, flow2) // 右侧
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, flow1) // 上侧
    dfs(m - 1, j, flow2) // 下侧
  }

  // 最后取两个大洋都能流到的位置
  const res = []
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c])
      }
    }
  }

  return res
}
