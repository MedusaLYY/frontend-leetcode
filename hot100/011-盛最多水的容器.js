/**
 * 11. 盛最多水的容器
 * https://leetcode.cn/problems/container-with-most-water/
 */

const maxArea = function(height) {
  let left = 0, right = height.length - 1;
  let max = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    max = Math.max(max, h * (right - left));
    height[left] < height[right] ? left++ : right--;
  }

  return max;
};
