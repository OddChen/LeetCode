/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 存在一个按升序排列的链表，给你这个链表的头节点head，请你删除所有重复的元素，使每个元素只出现一次 。
 * 返回同样按升序排列的结果链表。
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
//自己写的
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head
  }
  let newlist = new ListNode(0, head)
  let cur = newlist.next
  while (cur && cur.next) {
    while (cur.next && cur.val === cur.next.val) {
      cur.next = cur.next.next
    }
    cur = cur.next
  }
  return newlist.next
}

//官方解法
var deleteDuplicates = function (head) {
  if (!head) {
    return head
  }
  let cur = head
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}
