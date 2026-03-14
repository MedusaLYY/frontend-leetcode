/**
 * 70. 爬楼梯
 * https://leetcode.cn/problems/climbing-stairs/
 */

const climbStairs = function(n) {
  if (n <= 2) return n;
  
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
