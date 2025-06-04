function solution(n) {
    const answer = [];

    function hanoi(n, from, to, aux) {
        if (n === 1) {
            answer.push([from, to]);
        } else {
            hanoi(n - 1, from, aux, to);
            answer.push([from, to]);
            hanoi(n - 1, aux, to, from);
        }
    }
    hanoi(n, 1, 3, 2);

    return answer;
}