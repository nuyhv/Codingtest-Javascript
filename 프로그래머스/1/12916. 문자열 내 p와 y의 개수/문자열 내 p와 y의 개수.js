function solution(s){
    let p = 0, y = 0
    
    for (const str of s.toLowerCase()) {
        if (str === 'p') p++;
        else if (str === 'y') y++;
     }
    
    if (!p && !y) return true
    else {
        if (p === y) return true;
        else return false;
    }
}