/*
https://leetcode.com/problems/climbing-stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step



Constraints:

    1 <= n <= 45


*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    let prev = 1;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        let temp = curr;
        curr = prev + curr;
        prev = temp;
    }

    return curr;
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8
console.log(climbStairs(6)); // 13
console.log(climbStairs(7)); // 21
console.log(climbStairs(8)); // 34
console.log(climbStairs(9)); // 55
console.log(climbStairs(10)); // 89
