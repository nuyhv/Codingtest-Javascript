function solution(myString, pat) {
    return myString.replace(/[AB]/g, (match) => (match === 'A' ? 'B' : 'A')).includes(pat) ? 1 : 0;
}