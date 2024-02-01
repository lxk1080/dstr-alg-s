/**
 * @desc 获取斐波那契数列的第 n 个值（递归）
 * @TC O(n)
 * @SC O(n^2)
 * @param n 索引
 * @returns {*}
 */
const getfbnqNum_deep = (n) => {
  if (n <= 1) return n
  return getfbnqNum_deep(n - 1) + getfbnqNum_deep(n - 2)
}

/**
 * 使用递归的方法其实有问题，当索引值越来越大的时候，递归嵌套也越来越大，会导致计算效率变的越来越低，甚至半天算不出结果，下面改进：
 */

/**
 * @desc 使用数组
 * @TC O(n)
 * @SC O(n)
 */
const getfbnqNum_arr = (n) => {
  const fbnqArr = [0, 1]
  for (let i = 2; i <= n; i++) {
    fbnqArr[i] = fbnqArr[i - 1] + fbnqArr[i - 2]
  }
  return fbnqArr[n]
}

/**
 * 使用数组后发现效率变高了，但是还是可以再优化下，因为如果索引很大，那数组将会很长，其实数组中的大部分值是用不上的，没必要保存，下面再改进：
 */

/**
 * @desc 使用指针，要注意当索引为 0 时，直接返回 0
 * @TC O(n)
 * @SC O(1)
 */
const getfbnqNum_point = (n) => {
  if (n === 0) return 0
  let p0 = 0
  let p1 = 1
  for (let i = 2; i <= n; i++) {
    const p2 = p0 + p1
    p0 = p1
    p1 = p2
  }
  return p1
}

/**
 * @desc 测试代码
 */

console.log(getfbnqNum_point(0))
console.log(getfbnqNum_point(1))
console.log(getfbnqNum_point(2))
console.log(getfbnqNum_point(3))
console.log(getfbnqNum_point(4))
console.log(getfbnqNum_point(5))
console.log(getfbnqNum_point(62))
