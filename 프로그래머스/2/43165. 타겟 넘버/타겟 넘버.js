function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (i, cur) => {
        if (i === numbers.length) {
            if (cur !== target) return;
            else {
                answer ++;
                return;
            }
        }
        
        dfs (i + 1, cur + numbers[i]);
        dfs (i + 1, cur - numbers[i]);
    }
    
    dfs(0, 0);
    
    return answer;
}