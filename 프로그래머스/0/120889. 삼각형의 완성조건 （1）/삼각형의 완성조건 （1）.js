function solution(sides) {
    sides.sort((a, b) => b - a);
    
    const [a, b, c] = sides;
    
    return a < b + c ? 1 : 2;
}