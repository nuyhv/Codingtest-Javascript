function solution(numbers, hand) {
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2],
    }

    let leftPos = '*'
    let rightPos = '#';

    const getDistance = (pos1, pos2) => {
        const [x1, y1] = keypad[pos1];
        const [x2, y2] = keypad[pos2];
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };

    const getResult = (number) => {
        if (number === 1 || number === 4 || number === 7) {
            leftPos = number;
            return 'L';
        } else if (number === 3 || number === 6 || number === 9) {
            rightPos = number;
            return 'R';
        } else {
            const leftDistance = getDistance(leftPos, number);
            const rightDistance = getDistance(rightPos, number);

            if (leftDistance < rightDistance || (leftDistance === rightDistance && hand === 'left')) {
                leftPos = number;
                return 'L';
            } else {
                rightPos = number;
                return 'R';
            }
        }
    };

    return numbers.map(getResult).join('')
}