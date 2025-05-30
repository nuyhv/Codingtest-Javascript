function solution(friends, gifts) {
    const len = friends.length;
    const giftRecord = Array.from(Array(len), () => Array(len).fill(0));
    const bonus = Array(len).fill(0);

    for (const gift of gifts) {
        const [giver, receiver] = gift.split(' ');
        const giverIndex = friends.indexOf(giver);
        const receiverIndex = friends.indexOf(receiver);
        giftRecord[giverIndex][receiverIndex]++;
    }

    const giftIndices = giftRecord.map((row, i) => row.reduce((sum, val, j) => {
        if (i !== j) {
            sum += val;
            sum -= giftRecord[j][i];
        }
        return sum;
    }, 0));

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (giftRecord[i][j] > giftRecord[j][i]) bonus[i]++;
            if (giftRecord[i][j] < giftRecord[j][i]) bonus[j]++;
            if (giftRecord[i][j] === giftRecord[j][i]) {
                if (giftIndices[i] > giftIndices[j]) bonus[i]++;
                if (giftIndices[i] < giftIndices[j]) bonus[j]++;
            }
            if (i === j) continue;
        }
    }
    
    return Math.max(...bonus)
}