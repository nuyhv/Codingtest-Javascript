function solution(money) {
    let coffee = 5500;
    const amount = Math.floor(money / coffee);
    return [amount, money - coffee * amount];
}