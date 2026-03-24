/**
 * 10. 和为 K 的子数组
 * 题目：给你一个整数数组 nums 和一个整数 k，请你统计并返回该数组中和为 k 的子数组的个数。
 * 
 * 子数组是数组中元素的连续非空序列。
 * 
 * 示例：
 * 输入: nums = [1,1,1], k = 2
 * 输出: 2
 * 解释: 如下子数组的和为 2：[1,1] (位置 0-1)，[1,1] (位置 1-2)
 */

/**
 * 前缀和 + 哈希表解法
 * 核心思路：前缀和之差等于k时，这两个前缀和之间的子数组和为k
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // 哈希表：key是前缀和，value是该前缀和出现的次数
    const prefixSumCount = new Map();
    
    // 初始时，前缀和0出现1次（空数组）
    prefixSumCount.set(0, 1);
    
    let prefixSum = 0;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // 计算当前前缀和
        prefixSum += nums[i];
        
        // 查找是否有前缀和等于 prefixSum - k
        // 如果存在，说明存在一个子数组和为k
        if (prefixSumCount.has(prefixSum - k)) {
            count += prefixSumCount.get(prefixSum - k);
        }
        
        // 更新哈希表中当前前缀和的出现次数
        prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
    }
    
    return count;
};

// 测试用例
console.log(subarraySum([1, 1, 1], 2));        // 2
console.log(subarraySum([1, 2, 3], 3));        // 2 ([1,2], [3])
console.log(subarraySum([1], 0));              // 0
console.log(subarraySum([-1, -1, 1], 0));      // 1
console.log(subarraySum([1, 2, 3], 0));        // 0
