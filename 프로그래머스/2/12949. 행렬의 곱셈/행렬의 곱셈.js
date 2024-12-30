function solution(arr1, arr2) {
    // 행렬의 곱셈
    // 1 4    3  3          1*3 + 4*3, 1*3 + 4*3
    // 3 2    3  3          3*3 + 2*3, 3*3 + 2*3
    // 4 1                  4*3 + 1*3, 4*3 + 1*3
    const rows = arr1.length; 
    const cols = arr2[0].length; 
    const common = arr2.length;

    const result = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            for (let k = 0; k < common; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return result;
}