function solution(players, callings) {
    const playerIndex = {}

    for (let i = 0; i < players.length; i++) {
        playerIndex[players[i]] = i;
    }

    for (let i = 0; i < callings.length; i++) {
        const calledPlayer = callings[i];
        const calledIdx = playerIndex[calledPlayer];

        if (calledIdx > 0) {
            const temp = players[calledIdx];
            players[calledIdx] = players[calledIdx - 1];
            players[calledIdx - 1] = temp;

            playerIndex[players[calledIdx]] = calledIdx;
            playerIndex[players[calledIdx - 1]] = calledIdx - 1;
        }
    }

    return players
}