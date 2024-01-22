// noinspection JSValidateJSDoc
/**
 * @desc
 *  - 这道题主要是利用双指针遍历来解决，先定义 p1 和 p2，变量 p1 的遍历要比 p2 要晚一步，所以把 p2 的 next 指向 p1 也就完成了反转
 *  - 因为是反转，所以一开始初始化的时候，p1 赋值为 null 很关键
 *  - 在最后因为 p2 赋值给了 p2.next，所以真正的反转链表是 p1
 * @时间复杂度 O(n)，这个 n 就是链表的长度
 * @空间复杂度 O(1)，就几个变量不停的赋值，变量本身大小没变
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let p1 = null
  let p2 = head
  while (p2) {
    const tmp = p2.next
    p2.next = p1
    p1 = p2
    p2 = tmp
  }
  return p1
}
