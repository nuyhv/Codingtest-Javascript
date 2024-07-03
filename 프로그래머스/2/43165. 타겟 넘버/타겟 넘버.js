function solution(numbers, target) {
    var answer = 0;
    const len = numbers.length;
    
    const dfs = (i, cur) => {
        if (i === len) {
            if (cur === target) {
                answer++;
                return;    
            } else return;       
        }
        
        dfs(i + 1, cur + numbers[i]);
        dfs(i + 1, cur - numbers[i]);
    }
    
    dfs(0, 0);
    
    return answer;
}