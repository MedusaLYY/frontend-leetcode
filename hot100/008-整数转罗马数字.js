/**
 * 12. 整数转罗马数字
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
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
};

// 测试
console.log(intToRoman(3));    // III
console.log(intToRoman(4));    // IV
console.log(intToRoman(9));    // IX
console.log(intToRoman(58));   // LVIII
console.log(intToRoman(1994)); // MCMXCIV
