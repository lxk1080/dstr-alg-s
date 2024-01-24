/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/**
 * @desc 使用 Set，没啥好说的，唯一需要注意的点是：先去重，运行的速度会快一些（因为省去了对重复值的筛选）
 * @TC O(mn) m 是 nums1 的长度，是 filter 的时间，n 是 nums2 的长度，是调用 includes 方法的时间
 * @SC O(m) m 是 nums1 扩展出的数组长度
 * @param nums1
 * @param nums2
 * @returns {*[]}
 */
// const intersection = function(nums1, nums2) {
//     return [...new Set(nums1)].filter((n) => nums2.includes(n))
// }

/**
 * @desc
 *  - 使用 Map，在使用 set 方法时，已经对 nums1 进行了去重，因为未对 nums2 去重，所以在得到相同值后，需要删除掉 map 内的值，这样可保证唯一
 *  - 使用这种方法比使用 Set 的时间复杂度要小，因为少了 includes 这步操作
 *  - 保证唯一，为啥不直接用 nums1.keys() 遍历？
 *    - 如果使用 nums1.keys() 遍历，就必须使用类似 nums2.includes() 这种方法，这样就增加了时间复杂度
 * @TC O(n) 虽然有两个遍历，但是属于同级
 * @SC O(n) 定义的 Map 存放数据所占用的空间
 * @leetcode 349
 * @param nums1
 * @param nums2
 * @returns {*[]}
 */
const intersection = function(nums1, nums2) {
  const map = new Map()
  nums1.forEach((n) => {
    map.set(n, true)
  })
  const res = []
  nums2.forEach((n) => {
    if (map.get(n)) {
      res.push(n)
      map.delete(n)
    }
  })
  return res
}
