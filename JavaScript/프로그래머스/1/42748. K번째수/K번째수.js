function solution(array, commands) {
    let ans = []; 
    
    for (const command of commands) {
        const [i, j, k] = command;
        ans.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
    }
    
    return ans
}