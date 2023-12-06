function solution(s) {
    const answer = [];
    const lastIdx = new Map(); // [char, index]

    for (let i = 0; i < s.length; i++) {
        const curChar = s[i];

        if (lastIdx.has(curChar)) {
            answer.push(i - lastIdx.get(curChar));
        } else {
            answer.push(-1);
        }

        lastIdx.set(curChar, i);
    }

    return answer;
}
