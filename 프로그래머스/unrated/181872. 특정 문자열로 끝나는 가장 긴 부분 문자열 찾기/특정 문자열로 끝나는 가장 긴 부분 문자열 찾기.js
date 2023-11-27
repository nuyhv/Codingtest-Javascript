function solution(myString, pat) {
    const idx = myString.lastIndexOf(pat[pat.length - 1]);
    return myString.slice(0, idx + 1);
}