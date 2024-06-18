// noinspection JSValidateJSDoc, JSUndefinedPropertyAssignment

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @desc
 *  - 一般来讲删除节点，需要知道被删除节点的上一个节点，这样好改变上一个节点的 next，但是这道题只给你被删除的节点，咱也不知道上一个节点是啥
 *  - 换一种思考方式：删除被给定节点的下一个节点，但是在删除之前，把下一个节点的所有数据赋值给被给定的节点
 *  - 这样就相当于变相的删除了给定的节点，当然这种方式是无法回收给定节点的存储空间的
 *  - 注意：这种方式删除不了链表中的最后一个节点
 * @时空复杂度 O(1)
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
}
