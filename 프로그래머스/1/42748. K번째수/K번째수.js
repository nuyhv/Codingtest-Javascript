function solution(array, commands) {
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        const [n, j, k] = commands[i];
        answer.push(array.slice(n - 1, j).sort((a, b) => a - b)[k - 1]);
    }
    return answer;
}