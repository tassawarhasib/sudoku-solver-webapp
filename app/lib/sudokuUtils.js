export const createEmptyBoard = () => {
    let arr = new Array(9);
    for (let i = 0; i < 9; i++) {
        arr[i] = new Array(9).fill("");
    }
    return arr;
};


export const validateInput = (board, row, col, value) => {
    for (let i = 0; i < 9; i++) {
        if (value !== "") {
            if (board[i][col] === value || board[row][i] === value) return false;

            const newRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const newCol = 3 * Math.floor(col / 3) + (i % 3);
            if (board[newRow][newCol] === value) return false;
        }
    }
    return true;
};


export const sanitizeInput = (event) => {
    const input = event.target.value;
    const parsed = parseInt(input);
    return isNaN(parsed) || parsed < 1 || parsed > 9 ? -1 : parsed;
};