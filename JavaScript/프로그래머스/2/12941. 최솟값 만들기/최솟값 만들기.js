function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    
    return A.reduce((acc, a, i) => acc + a * B[i], 0)
}