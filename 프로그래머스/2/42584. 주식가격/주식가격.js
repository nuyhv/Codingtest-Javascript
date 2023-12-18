function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (prices[i] <= prices[j]) {
                answer[i]++;
            } else {
                answer[i]++;
                break;
            }
        }
    }

    return answer;
}