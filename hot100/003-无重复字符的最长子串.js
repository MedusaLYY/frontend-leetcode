/**
 * 无重复字符的最长子串
 * LeetCode Hot100 #3
 * longest-substring-without-repeating-characters
 */

// 题目描述
// 给定一个字符串 s，请你找出其中不含有重复字符的最长子串的长度。

// 解题思路
// 使用滑动窗口 + 哈希集合。
// 右指针不断向右扩展，当遇到重复字符时，左指针向右收缩直到窗口内无重复字符。
// 维护最大长度。

// 代码实现
function solution(s) {
  const set = new Set();
  let left = 0;
  let maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}

module.exports = { solution };
