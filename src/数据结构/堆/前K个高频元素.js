/**
 * @desc 常规解法，但是它的时间复杂度是 O(n * logN)，这个就是 sort 方法的时间复杂度，是不符合题目要求的
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// const topKFrequent = function(nums, k) {
//     const map = new Map()
//     nums.forEach((n) => {
//         map.set(n, map.get(n) ? map.get(n) + 1 : 1)
//     })
//     const list = Array.from(map).sort((a, b) => b[1] - a[1])
//     return list.slice(0, k).map((it) => it[0])
// }

/**
 * @desc 使用最小堆内，先统计每个数字出现次数，然后入堆，限制堆的长度为 k，最后，整个堆的元素就是前 k 个高频元素
 * @TC O(n*logK) 这个 n 就是数组的长度，logK 是堆操作的时间复杂度，题目中的 K 是小于 n 的，所以 O(n*logK) < O(n*logN)，符合要求
 * @SC O(n) 这个 n 就是最坏情况下 map 中存储的数据容量
 * @leetcode 347
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const map = new Map()
  nums.forEach((n) => {
    map.set(n, map.get(n) ? map.get(n) + 1 : 1)
  })
  const h = new MinHeap()
  // 注意 Map 的 forEach 方法给的参数是 (value, key)
  map.forEach((count, num) => {
    h.insert({ count, num })
    if (h.size() > k) {
      h.pop()
    }
  })
  return h.heap.map((it) => it.num)
}

/**
 * @desc 和（./最小堆类.js）内的实现方法一样，只不过为了适应题目，在比较节点大小的时候做了相应的变动
 */
class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(node) {
    this.heap.push(node)
    this.shiftUp(this.heap.length - 1)
  }

  pop() {
    if (this.size() === 1) return this.heap.pop()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return top
  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

  shiftUp(index) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] && this.heap[parentIndex].count > this.heap[index].count) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] && this.heap[leftIndex].count < this.heap[index].count) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] && this.heap[rightIndex].count < this.heap[index].count) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }

  getParentIndex(index) {
    return index - 1 >> 1
  }

  getLeftIndex(index) {
    return index * 2 + 1
  }

  getRightIndex(index) {
    return index * 2 + 2
  }

  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }
}
