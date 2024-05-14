function solution(A, B) {
    if (A.length !== B.length) return -1;

    const wordsA = [...A];
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        if (wordsA.join('') === B) {
            return count;
        }
        wordsA.unshift(wordsA.pop());
        count++;
    }

    return -1;
}
