function solution(n) {
    var ans = [];
    
    n = String(n);
    
    for (let i = n.length - 1; i >= 0; i--) {
        console.log(n[i]);
        ans.push(n[i] * 1);
    }
    
    return ans;
}