function solution(score) {
    const averages = score.map(el => (el[0] + el[1]) / 2); 
    const ranks = [];

    for (let i = 0; i < averages.length; i++) {
        let rank = 1;

        for (let j = 0; j < averages.length; j++) {
            if (averages[i] < averages[j]) {
                rank++;
            }
        }

        ranks.push(rank); 
    }

    return ranks;
}