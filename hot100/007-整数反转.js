/**
 * 整数反转
 * LeetCode Hot100 #7
 * reverse-integer
 */

// 题目描述
// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
// 如果反转后整数超过 32 位的有符号整数的范围 [−2^31, 2^31 − 1] ，就返回 0。

// 解题思路
// 数学计算：逐位取出数字并构建反转后的数字。
// 关键：在每次累加前检查是否会溢出。
// 32位有符号整数范围是 [-2^31, 2^31 - 1]，即 [-2147483648, 2147483647]。

// 代码实现
function solution(x) {
  let result = 0;
  let num = Math.abs(x);
  
  while (num > 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);
    
    // 检查溢出：result > (2147483647 - digit) / 10
    if (result > Math.floor((2147483647 - digit) / 10)) {
      return 0;
    }
    
    result = result * 10 + digit;
  }
  
  return x < 0 ? -result : result;
}

module.exports = { solution };
