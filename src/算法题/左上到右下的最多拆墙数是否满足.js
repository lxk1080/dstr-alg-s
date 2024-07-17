/**
 * @desc 从左上走到右下，最多只能拆 k 堵墙的情况下，能否走到终点？可上下左右移动，0 表示可通行，1 表示有墙阻挡
 *  解题思路
 *    1、由于机器人可以上下左右移动，所以需要使用类似广度优先搜索，遍历所有可能的路径（注意边界条件）
 *    2、因为拆墙数量有限为 k，所以需要记录到每一个位置时的剩余可拆墙的数量
 *    3、走过的位置不需要重复走，需要记录已经走过
 */

function canReachEnd(grid, k) {
  const rows = grid.length
  const cols = grid[0].length

  // 上下左右移动的本质就是行列的坐标改变
  const directions = [
    [0, 1], // 右
    [1, 0], // 下
    [0, -1], // 左
    [-1, 0]  // 上
  ]

  // [当前行, 当前列, 剩余可以拆除的墙的数量]
  const queue = [[0, 0, k]]
  // 记录剩余可以拆除的墙的数量，初始化 -1，表示还没走过，后续通过与 k 比较，如果比 k 小，则可走
  const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(-1))
  visited[0][0] = k

  while (queue.length > 0) {
    const [row, col, wallsLeft] = queue.shift()

    // 表示右下角，只要有一个路径能通，就返回 true
    if (row === rows - 1 && col === cols - 1) {
      return true
    }

    // 上下左右尝试移动
    for (const [dx, dy] of directions) {
      const newRow = row + dx
      const newCol = col + dy

      // 边界判断
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        // 因为表示墙的数字为 1，所以直接减去即可
        const newWallsLeft = wallsLeft - grid[newRow][newCol]

        // 在拆墙限制内 + 不走回头路
        if (newWallsLeft >= 0 && newWallsLeft > visited[newRow][newCol]) {
          visited[newRow][newCol] = newWallsLeft // 不走回头路的依据
          queue.push([newRow, newCol, newWallsLeft]) // 继续..
        }
      }
    }
  }

  // 最后走不到终点，返回 false
  return false
}

/**
 * 测试代码
 */

const grid = [
  [0, 1, 1],
  [1, 1, 1],
  [0, 1, 0]
]

const k = 2

console.log(canReachEnd(grid, k))
