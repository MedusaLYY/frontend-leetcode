/**
 * LeetCode 第20题 - 有效的括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  
  for (const char of s) {
    if (char in map) {
      // 当前是右括号，检查栈顶是否匹配
      if (stack.pop() !== map[char]) {
        return false;
      }
    } else {
      // 左括号入栈
      stack.push(char);
    }
  }
  
  // 栈空说明全部匹配
  return stack.length === 0;
};