/**
 * 7. 整数反转
 * https://leetcode.cn/problems/reverse-integer/
 * 
 * 思路：数学计算，注意边界溢出判断
 */

const reverse = function(x) {
    let result = 0;
    let num = Math.abs(x);
    
    while (num > 0) {
        const digit = num % 10;
        num = Math.floor(num / 10);
        
        // 检查溢出：32位有符号整数范围 [-2^31, 2^31 - 1]
        if (result > Math.floor((2147483647 - digit) / 10)) {
            return 0;
        }
        
        result = result * 10 + digit;
    }
    
    return x < 0 ? -result : result;
};

// 测试
console.log(reverse(123));      // 321
console.log(reverse(-123));     // -321
console.log(reverse(120));      // 21
console.log(reverse(1534236469)); // 0 (溢出)
