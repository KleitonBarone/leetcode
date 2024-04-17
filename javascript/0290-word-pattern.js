/*
https://leetcode.com/problems/word-pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

 

Constraints:

    1 <= pattern.length <= 300
    pattern contains only lower-case English letters.
    1 <= s.length <= 3000
    s contains only lowercase English letters and spaces ' '.
    s does not contain any leading or trailing spaces.
    All the words in s are separated by a single space.


*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let patternWordMap = new Map();
    let wordPatternMap = new Map();
    let lastWorld = 0;
    let currentPatternIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] === " " || i === s.length - 1) {
            const word = s.substring(lastWorld, i + 1);
            lastWorld = i + 2;
            if (
                patternWordMap.get(pattern[currentPatternIndex]) !==
                    undefined &&
                patternWordMap.get(pattern[currentPatternIndex]) !== word
            ) {
                return false;
            }

            if (
                wordPatternMap.get(word) !== undefined &&
                wordPatternMap.get(word) !== pattern[currentPatternIndex]
            ) {
                return false;
            }

            wordPatternMap.set(word, pattern[currentPatternIndex]);
            patternWordMap.set(pattern[currentPatternIndex], word);
            currentPatternIndex++;
        }
    }

    if (currentPatternIndex !== pattern.length) {
        return false;
    }

    return true;
};

console.log(wordPattern("abba", "dog constructor constructor dog"));
