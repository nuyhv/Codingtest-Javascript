function solution(n) {
    const matrix = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
    
    let num = 1;
    let row = 0, col = 0;
    let direction = 'right';
    
    while (num <= n * n) {
        matrix[row][col] = num++;
        
        if (direction === 'right' && (col + 1 === n || matrix[row][col + 1] !== 0)) {
            direction = 'down';
            row++;
        } else if (direction === 'down' && (row + 1 === n || matrix[row + 1][col] !== 0)) {
            direction = 'left';
            col--;
        } else if (direction === 'left' && (col === 0 || matrix[row][col - 1] !== 0)) {
            direction = 'up';  
            row--;
        } else if (direction === 'up' && (row === 0 || matrix[row - 1][col] !== 0)) {
            direction = 'right';  
            col++;
        } else {
            if (direction === 'right') col++;
            else if (direction === 'down') row++;
            else if (direction === 'left') col--;
            else if (direction === 'up') row--;
        }
    }
    
    return matrix;
}