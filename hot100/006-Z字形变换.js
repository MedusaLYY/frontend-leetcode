/**
 * 6. Z字形变换
 * https://leetcode.cn/problems/zigzag-conversion/
 * 
 * 思路：按行遍历，维护当前行和方向
 */

const convert = function(s, numRows) {
  if (numRows === 1) return s;
  
  const rows = Array.from({ length: numRows }, () => '');
  let currentRow = 0;
  let goingDown = false;
  
  for (const char of s) {
    rows[currentRow] += char;
    
    // 到达顶部或底部时反转方向
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    
    currentRow += goingDown ? 1 : -1;
  }
  
  return rows.join('');
};

// 测试
console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1)); // "A"
