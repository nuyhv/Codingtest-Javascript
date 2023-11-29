function solution(order) {
    const prices = order.map((menu) => menu.includes('cafelatte') ? 5000 : 4500);
    return prices.reduce((acc, cur) => acc + cur);
}