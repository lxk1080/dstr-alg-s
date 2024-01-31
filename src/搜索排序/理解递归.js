/**
 * @desc 这边借归并排序的分割后再合并的代码来好好理解下递归
 *  - 递归的特性也是后进先出，和数据结构栈一样
 *  - 递归的执行顺序其实就是深度优先（当然深度优先可以用递归实现，就是因为递归的本质就是深度优先，这两者相辅相成，你中有我，我中有你）
 *    - 在代码中看递归的执行顺序很简单，就是写代码的顺序
 *  - 重点：对于有 return 的递归，到底返回什么？主要看两点，当然看这两点的前提是你要知道递归的执行顺序
 *      1、递归的中止条件返回值。在这个递归中，不会再次进行递归了，遇到中止条件时，其返回值的形式是确定的，将其称之为：形式-1
 *        - 如果在某个递归函数中触发了中止条件，我们称之为：中止递归函数
 *      2、中止递归函数的上一层递归的返回值。中止递归函数的返回值是特殊的，其上一层递归的返回值形式才是普遍的，将其称之为：形式-2
 *        - 如果某递归函数中的所有子递归函数都是中止递归函数，我们称之为：中止递归父函数
 *    那么，最终这个递归函数的返回值形式就是：形式-1 和 形式-2 的结合，具体是啥，需要不同形式不同分析
 *  - 以下面的递归函数为例：
 *    - 深度优先的顺序是什么？
 *      - 函数中 left 先走递归，然后再走 right，所以深度优先的顺序就是从左到右
 *    - 谁最先触发中止递归函数？
 *      - 按照深度优先的顺序，左边先走递归，所以是最左边的那个数先触发，也就是 [3]，全部顺序就是数组中的排列顺序
 *    - 首先出的是谁？
 *      - 首先要知道对于有 return 的递归，到底返回什么？主要看哪两点，一个是中止递归函数，另一个是中止递归父函数
 *      - 中止递归函数到不了出这一步，所以不看中止递归函数，我们就需要看另一个：中止递归父函数
 *      - 一个函数如果是中止递归父函数，那么它的子递归函数应该都是中止递归函数
 *      - 按照深度优先顺序，第一个中止递归父函数中的 left 为 [3]，right 为 [2]
 *      - 所以首先出的是：[3, 2]
 *  - 下面代码在用 webstorm 测试时，记得先清空上一次运行结果，要不然输出可能会重叠
 */
const mergeDeep = (arr) => {
  const dfs = (arr) => {
    // console.log('进', arr)
    if (arr.length === 1) {
      // console.log('触', arr)
      return arr
    }
    const midIndex = arr.length >> 1
    const left = arr.slice(0, midIndex)
    const right = arr.slice(midIndex, arr.length)
    const leftArr = dfs(left)
    const rightArr = dfs(right)
    console.log('出',  [...leftArr, ...rightArr])
    return [...leftArr, ...rightArr]
  }
  dfs(arr)
}

/**
 * @desc 测试代码
 */

mergeDeep([3, 2, 5, 4, 7, 1, 9, 6, 8])
