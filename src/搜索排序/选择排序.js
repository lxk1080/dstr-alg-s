/**
 * @desc 选择排序
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

/**
 * @desc 测试代码
 */

const arr = [3, 2, 5, 4, 7, 1, 6]
console.log(selectionSort(arr))
