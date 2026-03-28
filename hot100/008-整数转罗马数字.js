/**
 * 整数转罗马数字
 * LeetCode Hot100 #12
 * integer-to-roman
 */

// 题目描述
// 罗马数字由字符 I、V、X、L、C、D、M 组成。
// 将整数转换为罗马数字，遵循从大到小的贪心策略。
// 特殊规则：4(IV)、9(IX)、40(XL)、90(XC)、400(CD)、900(CM) 等需要用减法形式表示。

// 解题思路
// 贪心算法：建立从大到小的数值-符号映射表，依次从大到小尝试减法转换。
// 从最高位开始，尽量使用最大的数值表示。

// 代码实现
function solution(num) {
  const valueSymbols = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  
  let result = '';
  for (const [value, symbol] of valueSymbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

module.exports = { solution };
