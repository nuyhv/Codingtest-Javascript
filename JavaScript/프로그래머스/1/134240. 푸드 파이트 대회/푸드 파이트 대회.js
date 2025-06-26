function solution(food) {
    let ans = '';
    
    for (let i = 1; i < food.length; i++) {
        ans += String(i).repeat((food[i] % 2 === 0 ? food[i] : food[i] - 1) / 2);
        console.log(ans)
    }
    
    return ans.concat(0).concat([...ans].reverse().join(''))
}