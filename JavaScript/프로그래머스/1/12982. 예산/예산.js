function solution(d, budget) {
    d.sort((a, b) => a - b);

    let count = 0;

    for (const num of d) {
        if (budget >= num) {
            budget -= num;
            count++;
        } else {
            break;
        }
    }

    return count;
}