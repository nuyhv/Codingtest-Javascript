function solution(s){
    let pCount = 0, yCount = 0;
    
    for (const str of s.toLowerCase()) {
        if (str === 'p') pCount++;
        else if (str === 'y') yCount++;
     }
    
    if (!pCount && !yCount) return true;
    else {
        if (pCount === yCount) return true;
        else return false;
    }
}