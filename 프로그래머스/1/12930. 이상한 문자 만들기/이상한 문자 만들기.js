function solution(s) {
    const strs = s.split(' ');
    const ans = [];
    
    for (const str of strs) {
        let s = '';
        for (let i = 0; i < str.length; i++) {
            if (i % 2 === 0) s += str[i].toUpperCase();
            else s += str[i].toLowerCase();
        }
        ans.push(s);
    }
    
    return ans.join(' ');
}