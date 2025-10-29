function solution(k, score) {
    const result = []
    const HOF = [];
    
    for (let i = 0; i < score.length; i++) {
        if (i < k) HOF.push(score[i]);
        
        if (score[i] > Math.min(...HOF)) {
            HOF.pop();
            HOF.push(score[i]);
            HOF.sort((a, b) => b - a);
        }
        
        result.push(HOF[HOF.length - 1]);
    }
    
    return result;
}