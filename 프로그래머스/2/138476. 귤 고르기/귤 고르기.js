function solution(k, tangerine) {
    const countMap = new Map()
    
    for (const size of tangerine) {
        countMap.set(size, (countMap.get(size) || 0) + 1)
    }
    
    const counts = [...countMap.values()].sort((a, b) => b - a);
    
    let total = 0;
    let varieties = 0;
    for (const count of counts) {
        total += count;
        varieties++;
        if (total >= k) break;
    }
    
    return varieties;
}