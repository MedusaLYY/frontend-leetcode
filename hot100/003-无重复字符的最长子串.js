/**
 * 3. 无重复字符的最长子串
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 */

const lengthOfLongestSubstring = function(s) {
  const seen = new Map();
  let start = 0, maxLen = 0;

  for (let end = 0; end < s.length; end++) {
    if (seen.has(s[end])) {
      start = Math.max(start, seen.get(s[end]) + 1);
    }
    seen.set(s[end], end);
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
};
