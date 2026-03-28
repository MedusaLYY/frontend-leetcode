/**
 * 字母异位词分组
 * LeetCode Hot100 #49
 * group-anagrams
 */

// 题目描述
// 给你一个字符串数组，请你将字母异位词组合在一起。可以按任意顺序返回结果列表。
// 字母异位词是由重新排列源单词的所有字母得到的一个新单词。

// 解题思路
// 方法一：排序法 - 将每个字符串排序后的结果作为 key，相同 key 的字符串为一组。
// 方法二：字符计数法 - 使用26个字母的计数数组作为 key（更优，时间复杂度更稳定）。

// 代码实现
function solution(strs) {
  const map = new Map();
  
  for (const str of strs) {
    // 字符计数法：创建26个字母的计数数组
    const count = new Array(26).fill(0);
    for (const char of str) {
      count[char.charCodeAt(0) - 97]++;
    }
    // 将计数数组转为字符串作为 key
    const key = count.join('#');
    
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  
  return Array.from(map.values());
}

module.exports = { solution };
