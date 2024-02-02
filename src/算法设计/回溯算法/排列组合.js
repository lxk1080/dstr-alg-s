/**
 * @desc 排列组合
 *  - 给一个数组，排列出所有的组合，组合包含数组所有元素，不要有重复数字
 *  - 死路：遇到重复数字（路走不通了）
 *  - 活路：非重复数字（路还能继续走）
 *  - 终点：组合的长度等于数组的长度了（路走到头了，递归的终点，也是题目的要求）
 *  - 注意：在测试代码中，数组的长度为 3，所以一开始的时候，就有 3 条路可走，这些路都能到达终点，所以都要走一走，才能得到全部组合
 *  - 评价：
 *    - 这个问题当年面试的时候遇到过，没搞出来，当时想的是要写数组长度次的 for 循环，但是没办法控制次数
 *    - 其实用递归就可以传递次数，如下：
 */

const permute_count = (nums) => {
  const deep = (deepCount, path) => {
    if (deepCount === nums.length) {
      console.log(deepCount, path)
      return
    }
    nums.forEach((n) => {
      if (path.includes(n)) return
      deep(deepCount + 1, [...path, n])
    })
  }
  deep(0, [])
}

/**
 * 既然要循环遍历，肯定要往下传递遍历到的值，干脆用 path 的长度去代替次数，最终代码如下：
 */

const permute_path = (nums) => {
  const deep = (path) => {
    if (path.length === nums.length) {
      console.log(path)
      return
    }
    nums.forEach((n) => {
      if (path.includes(n)) return
      deep([...path, n])
    })
  }
  deep([])
}

/**
 * @desc 测试代码
 */

const nums = [1, 2, 3]
permute_path(nums)
