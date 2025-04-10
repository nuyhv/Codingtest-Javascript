function solution(x, y, n) {
    if (x === y) return 0;  

    let currentLevel = new Set([x]);
    const visited = new Set([x]);
    let operations = 0;

    while (currentLevel.size > 0) {
        const nextLevel = new Set();
        operations++;

        for (const current of currentLevel) {
            const nextStates = [current + n, current * 2, current * 3];

            for (const nextState of nextStates) {
                if (nextState === y) {
                    return operations;
                }
                if (nextState < y && !visited.has(nextState)) {
                    nextLevel.add(nextState);
                    visited.add(nextState);
                }
            }
        }
        currentLevel = nextLevel;
    }

    return -1;
}
