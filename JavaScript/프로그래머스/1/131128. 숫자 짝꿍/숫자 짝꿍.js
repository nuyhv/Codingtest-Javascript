function solution(X, Y) {
    let xMap = Array(10).fill(0)
    let yMap = Array(10).fill(0);
    let answer = '';
    
    for (const xNum of X) {
        xMap[xNum] ++;
    }
    
    for (const yNum of Y) {
        yMap[yNum] ++;
    }
    
    const common = Array(10).fill(0).map((_, i) => Math.min(xMap[i], yMap[i]));
    
    for (let i = 0; i < common.length; i++) {
        if (common[i] !== 0) {
            answer += String(i).repeat(common[i]);
        }
    }
    
    if (answer === '') return '-1';
    if (Number(answer) === 0) return '0';
    
    return [...answer].sort((a, b) => b - a).join('');
}