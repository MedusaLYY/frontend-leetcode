/**
 * 最长回文子串
 * LeetCode Hot100 #5
 * longest-palindromic-substring
 */

// 题目描述
// 给你一个字符串 s，请你找出 s 中最长的回文子串。

// 解题思路
// 中心扩展法：从每个位置向外扩展，考虑奇数长度和偶数长度两种情况。
// 以每个位置为中心向两边扩散，找到以该位置为中心的最长回文串。

// 代码实现
function solution(s) {
  if (s.length < 2) return s;
  
  let start = 0;
  let maxLen = 1;
  
  // 中心扩展函数
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const curLen = right - left + 1;
      if (curLen > maxLen) {
        start = left;
        maxLen = curLen;
      }
      left--;
      right++;
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    // 奇数长度，以 i 为中心
    expandAroundCenter(i - 1, i + 1);
    // 偶数长度，以 i 和 i+1 为中心
    expandAroundCenter(i, i + 1);
  }
  
  return s.substring(start, start + maxLen);
}

module.exports = { solution };
