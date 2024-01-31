/**
 * @desc 使用数组实现最小堆类，包含 insert、pop、peek、size 等方法
 */
class MinHeap {
  constructor() {
    this.heap = []
  }

  // 1、先在堆底（数组的尾部）添加节点
  // 2、做节点上移操作，将这个值和它的父节点进行交换，直到父节点小于等于这个节点的值（或者移到堆顶就没法再往上移了）
  // 大小为 K 的堆中插入节点的时间复杂度为 O(logK)
  insert(node) {
    this.heap.push(node)
    this.shiftUp(this.heap.length - 1)
  }

  // 删除堆顶（要记住这里的 pop 是弹出堆顶的意思）
  // 1、用数组尾部元素替换堆顶（直接删除堆顶会破坏堆的结构）
  // 2、做节点下移操作，将堆顶的节点和它的子节点交换，直到子节点大于等于这个节点的值
  // 大小为 K 的堆中删除堆顶的时间复杂度也是 O(logK)
  pop() {
    if (this.size() === 1) return this.heap.pop()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return top
  }

  // 直接返回堆顶的节点，也就是数组第一个元素
  peek() {
    return this.heap[0]
  }

  // 直接返回数组的长度
  size() {
    return this.heap.length
  }

  shiftUp(index) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }

  // 二进制右移 1 位，相当于除以 2，并且会得到商，例如：4 >> 1 === 2、 6 >> 1 === 3、 7 >> 1 === 3
  // 二进制右移 2 位，相当于除以 2 后再除以 2，右移 n 位就是除以 2 除以 n 次
  // 移位运算符比加减乘除运算符的优先级要低
  getParentIndex(index) {
    // 固定公式：取父节点索引
    return index - 1 >> 1
  }

  getLeftIndex(index) {
    // 固定公式：取左侧子节点索引
    return index * 2 + 1
  }

  getRightIndex(index) {
    // 固定公式：取右侧子节点索引
    return index * 2 + 2
  }

  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }
}

/**
 * @desc 导出
 */

module.exports = MinHeap

/**
 * @desc 测试代码
 */

const minHeap = new MinHeap()

minHeap.insert(3)
minHeap.insert(2)
minHeap.insert(1)

// minHeap.pop()

console.log(minHeap)
console.log(minHeap.peek())
console.log(minHeap.size())
