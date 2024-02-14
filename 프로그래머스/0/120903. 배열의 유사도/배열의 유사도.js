function solution(s1, s2) {
    return s2.filter(el => s1.includes(el)).length;
}