function solution(n, m, section) {
    let count = 0;
    let edge = 0;
    
    for (const sec of section) {
        if (sec > edge) {
            count++;
            edge = sec + (m - 1);
        }
    }
    return count;
}