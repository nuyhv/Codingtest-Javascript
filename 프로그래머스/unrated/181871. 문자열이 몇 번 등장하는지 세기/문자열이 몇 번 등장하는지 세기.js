function solution(myString, pat) {
    let count = 0;
    let idx = myString.indexOf(pat);
    
    while (idx !== -1) {
        idx = myString.indexOf(pat, idx + 1);
        count++;
    }
    return count;
}