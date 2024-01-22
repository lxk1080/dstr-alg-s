// noinspection JSValidateJSDoc

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
   - 为啥不先转成数字，然后相加，再转成链表？听评论，可能会发生数字长度溢出
   - 主要注意两个点：
      - 算到最后，有进位的时候，需要再创建一个元素单元
      - 下面的解法是每次计算新建的一个节点，所以最后返回要返回 .next 删掉第一个数
   - 时间复杂度：O(n)，这个 n 就是 l1 和 l2 中的长度最大值
   - 空间复杂度：O(n)，因为每次循环都新建节点，所以 n 是 l1 和 l2 中的长度最大值加一，但常数忽略不计
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(0)
  let p1 = l1
  let p2 = l2
  let p3 = l3
  let c = 0
  while (p1 || p2 || c) {
    const v1 = p1 ? p1.val : 0
    const v2 = p2 ? p2.val : 0
    let v3 = v1 + v2 + c
    c = v3 >= 10 ? 1 : 0
    p3.next = new ListNode(v3 % 10)
    p1 = p1 ? p1.next : null
    p2 = p2 ? p2.next : null
    p3 = p3.next
  }
  return l3.next
}
