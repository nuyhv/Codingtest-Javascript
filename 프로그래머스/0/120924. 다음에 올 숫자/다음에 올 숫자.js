function solution(common) {
    const d = common[1] - common[0]; 
    const r = common[1] / common[0]; 

    if (common[2] - common[1] === d) {
        return common[common.length - 1] + d;
    } else {
        return common[common.length - 1] * r;
    }
}