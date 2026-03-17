/**
 * LeetCode Hot100 第5题 - 最长回文子串
 * https://leetcode.cn/problems/longest-palindromic-substring/
 * 
 * 解题思路：
 * 1. 中心扩展法：从每个位置向外扩展，找到以该位置为中心的最长回文串
 * 2. 考虑奇数长度和偶数长度两种情况
 * 
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 */

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
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
    // 奇数长度，以i为中心
    expandAroundCenter(i - 1, i + 1);
    // 偶数长度，以i和i+1为中心
    expandAroundCenter(i, i + 1);
  }
  
  return s.substring(start, start + maxLen);
}

// 测试用例
console.log(longestPalindrome("babad")); // "bab" 或 "aba"
console.log(longestPalindrome("cbbd"));  // "bb"
console.log(longestPalindrome("a"));      // "a"
console.log(longestPalindrome("ac"));     // "a" 或 "c"

module.exports = longestPalindrome;
