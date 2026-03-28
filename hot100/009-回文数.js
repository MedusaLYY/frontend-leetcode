/**
 * 回文数
 * LeetCode Hot100 #9
 * palindrome-number
 */

// 题目描述
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则返回 false 。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 解题思路
// 反转一半数字：直接将数字反转可能溢出，可以只反转后半部分，与前半部分比较。
// 对于偶数长度，直接比较；奇数长度时，中间数字不需要比较。
// 优化：负数一定不是回文数，末尾为0的非0数也不是回文数。

// 代码实现
function solution(x) {
  // 负数和以0结尾的非0数不是回文数
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  
  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  
  // 偶数位：x === reversed，奇数位：x === Math.floor(reversed / 10)
  return x === reversed || x === Math.floor(reversed / 10);
}

module.exports = { solution };
