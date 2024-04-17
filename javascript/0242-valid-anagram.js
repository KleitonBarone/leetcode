/*
https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

 

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let sLettersMap = new Map();
    for (let i = 0; i < s.length; i++) {
        sLettersMap.set(s[i], (sLettersMap.get(s[i]) ?? 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        const currentLetterAmount = (sLettersMap.get(t[i]) ?? 0) - 1;
        if (currentLetterAmount === -1) {
            return false;
        }

        if (currentLetterAmount === 0) {
            sLettersMap.delete(t[i]);
        } else {
            sLettersMap.set(t[i], currentLetterAmount);
        }
    }

    if (sLettersMap.size !== 0) {
        return false;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram"));
