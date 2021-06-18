/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。
 * 如果两个链表没有交点，返回 null 。
 *
 * 进阶：你能否设计一个时间复杂度 O(n) 、仅用 O(1) 内存的解决方案？
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//不使用额外空间
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let tempA = headA
  let tempB = headB
  while (tempA !== tempB) {
    tempA = tempA === null ? headB : tempA.next
    tempB = tempB === null ? headA : tempB.next
  }
  return tempA
}
//用了哈希集合
var getIntersectionNode = function (headA, headB) {
  let hash = new Set()
  let temp = headA
  while (temp !== null) {
    hash.add(temp)
    temp = temp.next
  }
  temp = headB
  while (temp !== null) {
    if (hash.has(temp)) {
      return temp
    }
    temp = temp.next
  }
  return null
}
