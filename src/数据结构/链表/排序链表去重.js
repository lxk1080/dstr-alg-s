/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @desc
 *  - 这道题就是使用遍历的方法，如果下一个元素的值和当前元素的值相等，就删掉下一个元素
 *  - 需要注意的点是：删掉一个后，不能立即改变 p 指针的指向，因为可能后面还有相同的元素，等到后面元素不相同了，再改变指针的指向
 * @时间复杂度 O(n)，链表的长度
 * @空间复杂度 O(1)，就一个指针变量
 * @leetcode 83
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  let p = head
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head
}
