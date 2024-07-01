/*
https://leetcode.com/problems/longest-substring-without-repeating-characters

Given a string s, find the length of the longest
substring
without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.



Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let n = s.length;
    let maxLengthSubstring = 0;
    let charMap = new Map();
    let leftIndex = 0;

    for (let rightIndex = 0; rightIndex < n; rightIndex++) {
        if (
            !charMap.has(s[rightIndex]) ||
            charMap.get(s[rightIndex]) < leftIndex
        ) {
            charMap.set(s[rightIndex], rightIndex);
            maxLengthSubstring = Math.max(
                maxLengthSubstring,
                rightIndex - leftIndex + 1
            );
        } else {
            leftIndex = charMap.get(s[rightIndex]) + 1;
            charMap.set(s[rightIndex], rightIndex);
        }
    }

    return maxLengthSubstring;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
