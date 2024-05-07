function solution(i, j, k) {
    var count = 0;
    
    for (let a = i; a <= j; a++) {
        const arr = [...String(a)];
        
        for (const el of arr) {
            if (el.includes(String(k))) count++;
        }
    }
    
    return count;
}

