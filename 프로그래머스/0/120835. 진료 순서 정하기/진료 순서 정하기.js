function solution(emergency) {
    const sorted = emergency.slice().sort((a, b) => b - a);
    
    return emergency.map(val => sorted.indexOf(val) + 1);
}