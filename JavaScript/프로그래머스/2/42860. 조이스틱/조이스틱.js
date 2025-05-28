function solution(name) {
    function getCharMoveCount(char) {
        const fromA = char.charCodeAt(0) - 'A'.charCodeAt(0);
        const fromZ = 'Z'.charCodeAt(0) - char.charCodeAt(0) + 1;
        return Math.min(fromA, fromZ);
    }

    let answer = 0;

    for (let i = 0; i < name.length; i++) {
        answer += getCharMoveCount(name[i]);
    }

    let minMoves = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        if (name[i] !== 'A') {
            let nextIdx = i + 1;
            while (nextIdx < name.length && name[nextIdx] === 'A') {
                nextIdx++;
            }

            const moves = i + name.length - nextIdx + Math.min(i, name.length - nextIdx);
            minMoves = Math.min(minMoves, moves);
        }
    }

    answer += minMoves;

    if (name === 'A'.repeat(name.length)) {
        return 0;
    }
    
    return answer;
}