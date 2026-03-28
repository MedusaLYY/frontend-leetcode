/**
 * 两数之和
 * LeetCode Hot100 #1
 * two-sum
 */

// 题目描述
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那两个整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案，但是数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

// 解题思路
// 使用哈希表（Map）存储遍历过的元素及其索引。
// 对于每个元素，计算 target - num = complement。
// 如果 complement 已在哈希表中，说明找到了答案，返回两个索引。
// 否则将当前元素存入哈希表。

// 代码实现
function solution(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

module.exports = { solution };
