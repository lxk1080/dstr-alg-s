/**
 * @desc 移动 0 到数组的末尾
 *  - 描述：
 *    - 只移动 0，其它顺序不变
 *    - 必须在原数组进行操作
 *  - 思路（这个算法是自己想出来的）：
 *    - 首先这个题目如果用 splice 之内的方法，时间复杂度太高，肯定不可用
 *    - 那么：
 *      - 首先记录下第一个 0 的位置
 *      - 从第一个 0 后面得数字开始遍历
 *      - 遇到 0 不管，遇到不是 0 的数字，就和第一个 0 的位置交换
 *      - 更新第一个 0 的位置，第一个 0 的位置必然是上一个位置的后一位（此算法最不好理解的点就是这个）
 *        - 因为 0 后面，要不然是 0，要不然就是数字
 *        - 是 0 的话，后面交换后，这个 0 就会变成第一个 0
 *        - 是数字的话，交换后，第一个 0 的位置加 1
 *      - 直到遍历完成即可
 */

function moveZero(arr) {
  let zeroIndex = arr.indexOf(0)
  if (zeroIndex < 0) return arr
  for (let i = zeroIndex + 1; i < arr.length; i++) {
    const num = arr[i]
    if (num !== 0) {
      arr[zeroIndex] = num
      arr[i] = 0
      zeroIndex++
    }
  }
  return arr
}

/**
 * @desc 测试代码
 *  - 最好配合单元测试
 */

console.log(moveZero([1,2,0,3,0,4,0,5,0,0,6,0,7,0,0]))
console.log(moveZero([1,2,3,4,5,6,7]))
console.log(moveZero([0,0,0,0,0]))
