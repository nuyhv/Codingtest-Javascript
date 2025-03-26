function solution(t, p) {
    const len = p.length;
    let arr = [];
    let count = 0;
    
    for (let i = 0; i < t.length - len + 1; i++) {
        arr.push(Number(t.slice(i, i + len)));
    }
    
    for (const num of arr) {
        if (num <= Number(p)) count++;
    }
    return count;
}