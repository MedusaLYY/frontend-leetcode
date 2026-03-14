/**
 * 141. 环形链表
 * https://leetcode.cn/problems/linked-list-cycle/
 */

const hasCycle = function(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
