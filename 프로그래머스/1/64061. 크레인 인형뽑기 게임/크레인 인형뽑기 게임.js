function solution(board, moves) {
    const transpose = (matrix) => {
        const rows = matrix.length;
        const cols = matrix[0].length;

        const result = Array.from({ length: cols }, () => Array(rows).fill(0));
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                result[j][i] = matrix[i][j];
            }
        }

        return result.map(row => row.filter(element => element !== 0));
    }

    let newBoard = transpose(board);

    const len = board.length;
    let bucket = [];
    let count = 0;

    for (let i = 0; i < moves.length; i++) {
        const bNum = moves[i] - 1;
        if (newBoard[bNum].length > 0) {
            const n = newBoard[bNum].shift();
            if (bucket.length > 0 && bucket[bucket.length - 1] === n) {
                bucket.pop();
                count += 2;
            } else {
                bucket.push(n);
            }
        }
    }

    return count
}