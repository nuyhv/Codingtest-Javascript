function solution(array, commands) {
    let answer = []; 
    
    for (const command of commands) {
        const [i, j, k] = command;
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
    }
    
    return answer;
}