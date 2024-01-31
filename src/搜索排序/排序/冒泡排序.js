/**
 * @desc 冒泡排序
 */
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

/**
 * @desc 测试代码
 */

const arr = [3, 2, 5, 4, 7, 1, 6]
console.log(bubbleSort(arr))
