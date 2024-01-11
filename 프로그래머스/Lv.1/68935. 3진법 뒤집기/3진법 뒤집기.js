function solution(n) {
    const tNum = n.toString(3).split('').reverse().join('');
    
    return parseInt(tNum, 3);
}