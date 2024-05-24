/*
https://leetcode.com/problems/palindrome-number

Given an integer x, return true if x is a
palindrome
, and false otherwise.



Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.



Constraints:

    -231 <= x <= 231 - 1


Follow up: Could you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x != 0 && x % 10 == 0)) {
        // negative number or a number with a leading zero is not a palindrome
        return false;
    }

    let reversed = 0;
    while (x > reversed) {
        // reverse until half of the number is reached
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return x == reversed || x == Math.floor(reversed / 10); // if even number, check if two halves are equal. if odd remove middle digit and check again
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeWithString = function (x) {
    const str = x.toString();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(121)); // true
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(10)); // false
// console.log(isPalindrome(0)); // true
// console.log(isPalindrome(1)); // true
// console.log(isPalindrome(11)); // true
