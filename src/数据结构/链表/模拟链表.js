// 创建链表
const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }
a.next = b
b.next = c
c.next = d

// 遍历链表
let it = a
while(it) {
  console.log(it.val)
  it = it.next
}

// 增加节点
const e = { val: 'e' }
c.next = e
e.next = d

// 删除节点
c.next = d
