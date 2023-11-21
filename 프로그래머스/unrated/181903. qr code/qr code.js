function solution(q, r, code) {
    return code.split('').filter((el, i) => i % q === r).join('');
}