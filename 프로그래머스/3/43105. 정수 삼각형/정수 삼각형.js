function solution(triangle) {
    const len = triangle.length;
    
    const dp = triangle.map(row => [...row]);
    
    for (let i = 1; i < len; i++) {
        for (let j = 0; j <= i; j++) {
            const left = dp[i - 1][j];
            const right = dp[i - 1][j - 1];
            
            if (j === 0) dp[i][j] += left;
            else if (j === i) dp[i][j] += right;
            else dp[i][j] += Math.max(left, right);
        }
    }
    
    return Math.max(...dp[len - 1]);
}