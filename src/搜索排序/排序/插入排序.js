/**
 * @desc 插入排序
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let insertIndex = i
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] <= temp) break
      arr[j + 1] = arr[j]
      insertIndex--
    }
    arr[insertIndex] = temp
  }
  return arr
}

/**
 * @desc 测试代码
 */

const arr = [3, 2, 5, 4, 7, 1, 9, 6, 8]
console.log(insertionSort(arr))
