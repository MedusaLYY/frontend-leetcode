/**
 * 10. 正则表达式匹配
 * 题目：给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 * 
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 * 
 * 示例：
 * 输入: s = "aa", p = "a*"
 * 输出: true
 * 解释: '*' 表示可以匹配零个或多个前面的那一个元素，在这个例子中，前面的元素是 'a'。
 *       因此，字符串 "aa" 可被视为 'a' 重复了一次。
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // 创建 DP 表，dp[i][j] 表示 s[0:i] 和 p[0:j] 是否匹配
    const m = s.length;
    const n = p.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));
    
    // 空字符串和空模式是匹配的
    dp[0][0] = true;
    
    // 处理 p 中像 a*、b* 这样的模式（* 前面有字符）
    for (let j = 2; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    
    // 填充 DP 表
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const sChar = s[i - 1];
            const pChar = p[j - 1];
            
            if (pChar === '.' || pChar === sChar) {
                // 当前字符匹配，继承对角线结果
                dp[i][j] = dp[i - 1][j - 1];
            } else if (pChar === '*') {
                // * 匹配零个前面的元素
                dp[i][j] = dp[i][j - 2];
                
                // * 匹配一个或多个前面的元素（前提是前面能匹配）
                if (j >= 2) {
                    const prevPChar = p[j - 2];
                    if (prevPChar === '.' || prevPChar === sChar) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                }
            }
        }
    }
    
    return dp[m][n];
};

// 测试用例
console.log(isMatch("aa", "a*"));       // true
console.log(isMatch("aa", "a"));         // false  
console.log(isMatch("ab", ".*"));       // true
console.log(isMatch("aab", "c*a*b"));   // true
console.log(isMatch("mississippi", "mis*is*p*.")); // false
