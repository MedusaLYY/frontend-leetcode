/**
 * Z字形变换
 * LeetCode Hot100 #6
 * zigzag-conversion
 */

// 题目描述
// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后你的输出需要按照行数从左到右逐行读取，产生出一个新的字符串。

// 解题思路
// 按行遍历，维护当前行索引和方向（向下或向上）。
// 当到达第一行或最后一行时，改变方向。
// 将每个字符添加到对应的行，最后按顺序拼接所有行。

// 代码实现
function solution(s, numRows) {
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
}

module.exports = { solution };
