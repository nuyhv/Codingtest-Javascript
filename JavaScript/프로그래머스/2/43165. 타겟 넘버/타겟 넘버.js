function solution(numbers, target) {
    let answer = 0
    const len = numbers.length
    
    const dfs = (i, cur) => {
        if (i < len) {
            dfs(i + 1, cur + numbers[i]);
            dfs(i + 1, cur - numbers[i]);
        } else {
            if (cur === target) answer++;
        }
    }
    
    dfs(0, 0);
    
    return answer
}