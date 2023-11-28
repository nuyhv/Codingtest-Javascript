function solution(myStr) {
    const answer = myStr.replace(/[abc]/g, (match) => ' ').split(' ').filter((el) => el);
    return answer.length > 0 ? answer : ["EMPTY"];
}