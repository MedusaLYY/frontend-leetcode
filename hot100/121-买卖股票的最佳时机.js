/**
 * 121. 买卖股票的最佳时机
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 */

const maxProfit = function(prices) {
  let minPrice = Infinity, maxProfit = 0;
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
};
