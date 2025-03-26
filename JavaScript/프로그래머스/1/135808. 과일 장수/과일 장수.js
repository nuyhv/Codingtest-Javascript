function solution(k, m, score) {
    const arr = score.sort((x, y) => y - x);
    const box = [];
    
    for (let i = 0; i < score.length; i += m) {
        const temp = arr.slice(i, i + m);
        if (temp.length === m) box.push(Math.min(...temp));
    }
    
    return box.reduce((acc, cur) => acc + cur, 0) * m;
}