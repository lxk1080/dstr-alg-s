/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @desc 使用转化数组后对比
 * @TC O(n) 遍历链表
 * @SC O(n) 使用数组存储链表数据
 * @param {ListNode} head
 * @return {boolean}
 */
// const isPalindrome = function(head) {
//     if (!head.next) return true
//     let p = head
//     let arr = []
//     while (p) {
//         arr.push(p.val)
//         p = p.next
//     }
//     return arr.join('') === arr.reverse().join('')
// }

/**
 * @desc 使用截断链表后反转对比
 * @TC O(n) 遍历链表
 * @SC O(1) 只有几个固定变量
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  if (!head.next) return true

  // 计算总长度
  let p = head
  let count = 0
  while (p) {
    count++
    p = p.next
  }

  // 找到后半段的起始位置
  const afterStart = Math.ceil(count / 2) + 1

  // 得到后半段链表
  let p2 = head
  let count2 = 1
  while (count2 < afterStart) {
    count2++
    p2 = p2.next
  }

  // 反转后半段链表
  let p3 = null
  let p4 = p2
  while (p4) {
    const tmp = p4.next
    p4.next = p3
    p3 = p4
    p4 = tmp
  }

  // 拿后半段链表与前半段链表做对比，有一个不同就说明不是回文链表
  let p5 = head
  while (p3) {
    if (p3.val !== p5.val) return false
    p3 = p3.next
    p5 = p5 ? p5.next : null
  }

  return true
}
