/**
 * Definition for singly-linked list.
 **/
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @desc 模拟最小堆法，维护一个长度为 2 的队列，不停的出队和入队，入队后要确保队头是最小的
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// const mergeTwoLists = function(list1, list2) {
//   if (!list1 && !list2) return null
//   const res = new ListNode(0)
//   let p = res
//   const queue = []
//   const first = !list1 ? list2 : (!list2 ? list1 : (list1.val < list2.val ? list1 : list2))
//   const second = first === list1 ? list2 : list1
//   if (first) queue.push(first)
//   if (second) queue.push(second)
//   while (queue.length) {
//     const node = queue.shift()
//     p.next = node
//     p = p.next
//     if (node.next) {
//       if (!queue.length) {
//         queue.push(node.next)
//       } else {
//         if (node.next.val > queue[0].val) {
//           queue.push(node.next)
//         } else {
//           queue.unshift(node.next)
//         }
//       }
//     }
//   }
//   return res.next
// }

/**
 * @desc 合并有序数组的标准解法
 *  - 新建空数组 res，比较两个有序数组的头部，较小者出队并推入 res 中，如果两个数组还有值，就重复做比较后推入操作
 *  - 对应到链表上，照葫芦画瓢即可：新建空链表、用移动指针代表链表头部变化
 * @TC O(n) 这个 n 是两个链表中的节点总数
 * @SC O(1) 虽然新建了链表，但是其值，还是两个老链表上的，所以都是些固定变量
 * @leetcode 21
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null
    const res = new ListNode(0)
    let p = res
    let p1 = list1
    let p2 = list2
    let node
    while (p1 || p2) {
        if (p1 && p2) {
            node = p1.val < p2.val ? p1 : p2
        } else {
            node = p1 || p2
        }
        p.next = node
        p = p.next
        if (node === p1) p1 = p1.next
        if (node === p2) p2 = p2.next
    }
    return res.next
}
