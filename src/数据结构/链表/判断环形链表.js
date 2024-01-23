/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @desc
 *  - 这道题常规来看可能会这么解：遍历链表，将元素保存在数组中，每遍历一个就判断当前元素的 next 指向的元素是否被数组包含，包含就是环形，遍历结束未包含就不是环形
 *  - 但是这道题巧妙的运用了：在操场上跑的快的一定会追上跑的慢的这样一个原理（可能跑了几圈后追上了）
 *  - 以下代码 p1 每次走一步，p2 每次走两步，p2 最终一定会追上 p1
 * @TC O(n) 遍历链表，有可能配跑了好几圈，例如 3n、4n，常数忽略不计，就是 n
 * @SC O(1) 就两个变量
 * @leetcode 141
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  let p1 = head
  let p2 = head
  while (p1 && p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) {
      return true
    }
  }
  return false
}
