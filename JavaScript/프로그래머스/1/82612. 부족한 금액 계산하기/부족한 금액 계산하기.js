function solution(price, money, count) {
    let total = 0
    
    for (let i = 1; i <= count; i++) {
        total += price * i;
        console.log(total)
    }

    return money >= total ? 0 : Math.abs(money - total);
}