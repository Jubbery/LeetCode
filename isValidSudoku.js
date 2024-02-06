/**
 * @param {string[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let checkForDupArr = [];

  var hasDuplicate = (arr) => {
    return arr.some((c, i) => arr.indexOf(c) !== i);
  };

  // Check by horizontal and vertical
  for (let i = 0; i < 9; i++) {
    // Check for horizontal
    if (hasDuplicate(board[i].filter((c) => c !== "."))) return false;

    // Check for vertical
    checkForDupArr.push(board[0][i]);
    checkForDupArr.push(board[1][i]);
    checkForDupArr.push(board[2][i]);
    checkForDupArr.push(board[3][i]);
    checkForDupArr.push(board[4][i]);
    checkForDupArr.push(board[5][i]);
    checkForDupArr.push(board[6][i]);
    checkForDupArr.push(board[7][i]);
    checkForDupArr.push(board[8][i]);

    if (hasDuplicate(checkForDupArr.filter((c) => c !== "."))) return false;

    checkForDupArr = [];
  }

  // Check by block O(27)
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      checkForDupArr.push(board[i][j]);
      checkForDupArr.push(board[i + 1][j]);
      checkForDupArr.push(board[i + 2][j]);

      checkForDupArr.push(board[i][j + 1]);
      checkForDupArr.push(board[i + 1][j + 1]);
      checkForDupArr.push(board[i + 2][j + 1]);

      checkForDupArr.push(board[i][j + 2]);
      checkForDupArr.push(board[i + 1][j + 2]);
      checkForDupArr.push(board[i + 2][j + 2]);

      if (hasDuplicate(checkForDupArr.filter((c) => c !== "."))) return false;

      checkForDupArr = [];
    }
  }

  return true;
};

const toGo = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(toGo));

// [i+0,j+0][i+0,j+1][i+0,j+2]
// [i+1,j+0][i+1,j+1][i+1,j+2]
// [i+2,j+0][i+2,j+1][i+2,j+2]

// [0,0][0,1][0,2]  [0,3][0,4][0,5]  [0,6][0,7][0,8]
// [1,0][1,1][1,2]  [1,3][1,4][1,5]  [1,6][1,7][1,8]
// [2,0][2,1][2,2]  [2,3][2,4][2,5]  [2,6][2,7][2,8]

// [3,0][3,1][3,2]  [3,3][3,4][3,5]  [3,6][3,7][3,8]
// [4,0][4,1][4,2]  [4,3][4,4][4,5]  [4,6][4,7][4,8]
// [5,0][5,1][5,2]  [5,3][5,4][5,5]  [5,6][5,7][5,8]

// [6,0][6,1][6,2]  [6,3][6,4][6,5]  [6,6][6,7][6,8]
// [7,0][7,1][7,2]  [7,3][7,4][7,5]  [7,6][7,7][7,8]
// [8,0][8,1][8,2]  [8,3][8,4][8,5]  [8,6][8,7][8,8]
