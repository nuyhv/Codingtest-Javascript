function solution(targets) {
    var answer = 1
    targets.sort((a, b) => b[0] - a[0])
    let ic = targets[0][0]
    
    for (let i = 1; i < targets.length; i++) {
        const [s, e] = targets[i];

        if (e <= ic) {
            ic = s;
            answer++;
        }
    }

    return answer
}