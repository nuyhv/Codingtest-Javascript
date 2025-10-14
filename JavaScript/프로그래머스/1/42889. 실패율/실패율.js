const getFailure = (stage, stages) => {
    const totalPlayers = stages.filter(num => num >= stage).length
    const failedPlayers = stages.filter(num => num === stage).length
    
    if (totalPlayers === 0) {
        return 0
    } else {
        return failedPlayers / totalPlayers;
    }
};

const solution = (N, stages) => {
    const failureRates = [];
    
    for (let i = 1; i <= N; i++) {
        const failureRate = getFailure(i, stages);
        failureRates.push({ stage: i, failureRate });
    }
    
    failureRates.sort((a, b) => b.failureRate - a.failureRate || a.stage - b.stage);
    
    const result = failureRates.map(item => item.stage);
    
    return result
};