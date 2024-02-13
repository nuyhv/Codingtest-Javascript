function solution(s) {
    const char = new Map();
    for (const c of s) {
        char.set(c, (char.get(c) || 0) + 1);
    }
    
    const once = [];
    for (const [c, count] of char) {
        if (count === 1) {
            once.push(c);
        }
    }
    
    return once.sort().join('');
}