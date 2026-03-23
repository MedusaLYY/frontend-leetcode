/**
 * 9. 回文数
 * https://leetcode.cn/problems/palindrome-number/
 * 
 * 思路：反转一半数字，避免溢出
 */

const isPalindrome = function(x) {
    // 负数不是回文数
    if (x < 0) return false;
    
    // 0结尾且不是0的一定不是回文（但0是）
    if (x !== 0 && x % 10 === 0) return false;
    
    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // 奇数位时需要除以10
    return x === reversed || x === Math.floor(reversed / 10);
};

// 测试
console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
console.log(isPalindrome(0));     // true
