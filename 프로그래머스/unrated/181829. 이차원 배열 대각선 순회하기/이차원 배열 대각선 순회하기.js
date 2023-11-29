function solution(board, k) {
    let answer = 0;
    const row = board.length;
    const col = board[0].length;
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i + j <= k) answer += board[i][j];
        }
    }
    return answer;
}