/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @desc 因为是排序后的链表，所以新链表的下一个节点肯定是 K 个链表中某个链表的头节点
 *  - 所以一开始把 K 个链表的头结点都放到最小堆中，堆顶就是最小的节点
 *  - 只要堆中有值，就弹出堆顶，组成新链表的下一个节点
 *  - 此时堆顶节点所在链表的下一个节点就变成了链表的头结点，继续把这个头结点放入最小堆中进行比较
 *  - 只要堆中有值，就继续弹出堆顶 。。循环往复
 *  - 直到 K 个链表中所有节点全都入堆并出堆，新的链表就排好了
 *  - Plus：这道题利用最小堆，在节点入堆后就已经得到了最小值，如果不用堆的话也行
 *    - 例如数组，这样就需要在每次的 while 内自行判断最小值，就要用到排序，时间复杂度的话最小也是 O(n*logN) 了，在时间复杂度上没有堆好
 * @TC O(n*logK) 这个 n 就是 K 个链表中的节点总数，对应 while 循环次数，K 是链表的数量，也是堆的大小，对应堆操作的时间复杂度
 * @SC O(K) 堆中只会存储 K 个链表的头节点，大小就是 K
 * @leetcode 23
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  const res = new ListNode(0)
  let p = res
  const h = new MinHeap()
  lists.forEach((node) => {
    if (node) h.insert(node)
  })
  while (h.size()) {
    const node = h.pop()
    p.next = node
    p = p.next
    if (node.next) h.insert(node.next)
  }
  return res.next
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
    if (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
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
