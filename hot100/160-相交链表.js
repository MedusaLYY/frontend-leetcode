/**
 * 160. 相交链表
 * https://leetcode.cn/problems/intersection-of-two-linked-lists/
 */

const getIntersectionNode = function(headA, headB) {
  let a = headA, b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};
