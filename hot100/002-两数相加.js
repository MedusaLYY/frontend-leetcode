/**
 * 两数相加
 * LeetCode Hot100 #2
 * add-two-numbers
 */

// 题目描述
// 给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 解题思路
// 模拟加法运算，从链表头部开始逐位相加，使用变量 carry 记录进位。
// 注意处理长度不同和最后可能的进位情况。

// 代码实现
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function solution(l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return dummy.next;
}

module.exports = { solution, ListNode };
