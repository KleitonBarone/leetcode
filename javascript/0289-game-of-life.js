/*
https://leetcode.com/problems/game-of-life

According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

    Any live cell with fewer than two live neighbors dies as if caused by under-population.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by over-population.
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.



Example 1:

Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Example 2:

Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]



Constraints:

    m == board.length
    n == board[i].length
    1 <= m, n <= 25
    board[i][j] is 0 or 1.



Follow up:

    Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
    In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    let row = board.length;
    let column = board[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            let count = 0; // count the number of live neighbors
            for (let k = i - 1; k <= i + 1; k++) {
                for (let h = j - 1; h <= j + 1; h++) {
                    if (
                        board[k] &&
                        board[k][h] !== undefined &&
                        !(k === i && h === j)
                    ) {
                        if (board[k][h] > 0) {
                            count += 1;
                        }
                    }
                }
            }

            // if the cell is dead and the number of live neighbors is 3, it revives
            if (board[i][j] === 0 && count === 3) {
                board[i][j] = -1;
            }
            // if the cell is alive and the number of live neighbors is less than 2 or greater than 3, then it dies
            else if ((count < 2 || count > 3) && board[i][j] === 1) {
                board[i][j] = 2;
            }
        }
    }

    // update the board to reflect the changes
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (board[i][j] === -1) {
                board[i][j] = 1;
            } else if (board[i][j] === 2) {
                board[i][j] = 0;
            }
        }
    }
};

console.log(
    gameOfLife([
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
    ])
); // [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
console.log(
    gameOfLife([
        [1, 1],
        [1, 0],
    ])
); // [[1,1],[1,1]]
