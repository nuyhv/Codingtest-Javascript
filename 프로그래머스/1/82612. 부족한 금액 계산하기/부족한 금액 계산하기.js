function solution(price, money, count) {
    let i = 1;
    let paid = 0;
    while (i <= count) {
        paid += price * i;
        i++
    }
    return paid > money ? paid - money : 0;
}