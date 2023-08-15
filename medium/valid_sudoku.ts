/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const set = new Set();

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      const value = board[r][c];
      if (value !== ".") {
        const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        if (
          set.has(`${value} row ${r}`) ||
          set.has(`${value} col ${c}`) ||
          set.has(`${value} box ${b}`)
        )
          return false;
        set.add(`${value} row ${r}`);
        set.add(`${value} col ${c}`);
        set.add(`${value} box ${b}`);
      }
    }
  }
  return true;
};
