function solution(n) {
    let count = 0;
    let ans = 0; 

    while (count < n) {
        ans++;
        
        if (ans % 3 !== 0 && String(ans).indexOf('3') === -1) count++;
    }

    return ans;
}