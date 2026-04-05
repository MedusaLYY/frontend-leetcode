/**
 * LeetCode 第21题 - 合并两个有序链表
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // 虚拟头节点
  const dummy = new ListNode(-1);
  let prev = dummy;
  
  // 遍历两个链表，选择较小的节点
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }
  
  // 连接剩余部分
  prev.next = list1 !== null ? list1 : list2;
  
  return dummy.next;
};

/**
 * 递归版本
 */
var mergeTwoListsRec = function(list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  
  if (list1.val <= list2.val) {
    list1.next = mergeTwoListsRec(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoListsRec(list1, list2.next);
    return list2;
  }
};