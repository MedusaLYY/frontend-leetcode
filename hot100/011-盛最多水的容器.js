/**
 * 盛最多水的容器
 * LeetCode Hot100 #11
 * container-with-most-water
 */

// 题目描述
// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以容纳的最大水量。

// 解题思路
// 双指针法：从两端向中间收敛。
// 短板决定高度，因此移动较短的那一侧，保留可能产生更大面积的机会。
// 因为移动较长的一侧只会让宽度减小，高度也不会增加（受限于短板）。

// 代码实现
function solution(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  
  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, width * h);
    
    // 移动较短的那一侧
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxArea;
}

module.exports = { solution };
