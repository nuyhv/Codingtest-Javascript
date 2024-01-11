function solution(arr1, arr2) {
    const numRows = arr1.length;
    const numCols = arr1[0].length;

    const answer = Array.from(Array(numRows), () => Array(numCols).fill(0));

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }

    return answer;
}