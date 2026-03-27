/**
 * 12. 整数转罗马数字
 * 罗马数字由 I V X L C D M 组成，按照大小规则从大到小贪心转换
 * @param {number} num
 * @returns {string}
 */
function intToRoman(num) {
  const valueMap = [
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
  ]

  let result = ''
  for (const [value, symbol] of valueMap) {
    while (num >= value) {
      result += symbol
      num -= value
    }
  }
  return result
}

// 测试
console.log(intToRoman(3))    // III
console.log(intToRoman(58))   // LVIII
console.log(intToRoman(1994)) // MCMXCIV