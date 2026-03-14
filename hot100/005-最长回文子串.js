/**
 * 5. 最长回文子串
 * https://leetcode.cn/problems/longest-palindromic-substring/
 */

const longestPalindrome = function(s) {
  if (s.length < 2) return s;
  
  let start = 0, maxLen = 1;

  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        start = left;
        maxLen = right - left + 1;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i - 1, i + 1);
    expand(i, i + 1);
  }

  return s.substring(start, start + maxLen);
};
