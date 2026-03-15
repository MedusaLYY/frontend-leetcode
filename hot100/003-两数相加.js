/**
 * 2. 两数相加
 * https://leetcode.cn/problems/add-two-numbers/
 * 
 * 给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，
 * 并且每个节点只能存储一位数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 创建哨兵节点，简化边界处理
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0; // 进位

    // 遍历两个链表
    while (l1 || l2) {
        // 获取当前节点值（如果节点不存在则为0）
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        // 计算当前位置的和
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // 更新进位
        curr.next = new ListNode(sum % 10); // 创建新节点

        // 移动指针
        curr = curr.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // 处理最后的进位
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    return dummy.next;
};

/**
 * 测试示例：
 * 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807
 * 
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 * 
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 */
