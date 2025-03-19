/*
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.
'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).
Note:
s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.
Example 1:
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:
Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:
Input:
s = "cb"
p = "?a"
Output: false
*/


function isMatch(s, p) {
    const sLen = s.length;
    const pLen = p.length;
    const dp = new Array(sLen + 1).fill(null).map(() => new Array(pLen + 1).fill(false));

    dp[0][0] = true;

    for (let j = 1; j <= pLen; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[sLen][pLen];
}

// Example usage:
console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", "*")); // true
console.log(isMatch("cb", "?a")); // false
console.log(isMatch("adceb", "*a*b")); // true
console.log(isMatch("acdcb", "a*c?b")); // false
console.log(isMatch("", "*")); //true
console.log(isMatch("abc", "abc")); //true
console.log(isMatch("abc", "a*c")); //true
console.log(isMatch("abc", "a?c")); //true
console.log(isMatch("abc", "a*")); //true
console.log(isMatch("abc", "*c")); //true
console.log(isMatch("abc", "*")); //true
console.log(isMatch("abc", "??")); //false
console.log(isMatch("abc", "???")); //true
console.log(isMatch("abc", "??*")); //true