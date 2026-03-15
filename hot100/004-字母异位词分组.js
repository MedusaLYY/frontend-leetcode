/**
 * 49. 字母异位词分组
 * https://leetcode.cn/problems/group-anagrams/
 * 
 * 给你一个字符串数组，请你将字母异位词组合在一起。可以按任意顺序返回结果列表。
 * 字母异位词是由重新排列源单词的所有字母得到的一个新单词。
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 使用Map存储，key为排序后的字符串
    const map = new Map();
    
    for (const str of strs) {
        // 将字符串排序作为key
        const key = str.split('').sort().join('');
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    
    return Array.from(map.values());
};

/**
 * 方法二：使用字符计数（更优）
 * 时间复杂度：O(n * k)，k为字符串最大长度
 * 空间复杂度：O(n * k)
 */
var groupAnagrams2 = function(strs) {
    const map = new Map();
    
    for (const str of strs) {
        // 计数方法：创建26个字母的计数数组
        const count = new Array(26).fill(0);
        for (const char of str) {
            count[char.charCodeAt(0) - 97]++;
        }
        // 将计数数组转为字符串作为key
        const key = count.join('#');
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    
    return Array.from(map.values());
};

/**
 * 测试示例：
 * 
 * 输入: strs = ["eat","tea","tan","ate","nat","bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * 输入: strs = [""]
 * 输出: [[""]]
 * 
 * 输入: strs = ["a"]
 * 输出: [["a"]]
 */
