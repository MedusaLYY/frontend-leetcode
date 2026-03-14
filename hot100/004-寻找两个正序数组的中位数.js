/**
 * 4. 寻找两个正序数组的中位数
 * https://leetcode.cn/problems/median-of-two-sorted-arrays/
 */

const findMedianSortedArrays = function(nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  
  return arr.length % 2 === 0
    ? (arr[mid - 1] + arr[mid]) / 2
    : arr[mid];
};
