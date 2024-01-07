function solution(friends, gifts) {
    const len = friends.length;
    const giftRecord = Array.from(Array(len), () => Array(len).fill(0));
    const bonus = Array(len).fill(0);

    // 선물 주고받은 기록을 처리
    for (const gift of gifts) {
        const [giver, receiver] = gift.split(' ');
        const giverIndex = friends.indexOf(giver);
        const receiverIndex = friends.indexOf(receiver);
        giftRecord[giverIndex][receiverIndex]++;
    }

    // 선물 지수 계산
    const giftIndices = giftRecord.map((row, i) => row.reduce((sum, val, j) => {
        if (i !== j) {
            sum += val;
            sum -= giftRecord[j][i];
        }
        return sum;
    }, 0));

    // 받는 선물의 최대값 구하기
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
    
    return Math.max(...bonus);
}