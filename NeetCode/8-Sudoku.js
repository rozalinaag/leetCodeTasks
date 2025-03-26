function isValidSudoku(board){
    const data = {'row': {}, 'column': {}}
    for (let i = 0; i > board.length; i++) {
        data['column'][i] = board[i][0]
        for(let j = 0; j < board.length; j++) {
            if (!Number(board[i][j])){
                data['row'][i] = board[i][j];
                return false;
            }
        }
    }
    return true
}

console.log(isValidSudoku([["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","8",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]]))