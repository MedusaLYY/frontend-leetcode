/**
 * 20. 有效的括号
 * https://leetcode.cn/problems/valid-parentheses/
 */

const isValid = function(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };

  for (const char of s) {
    if (char in map) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
