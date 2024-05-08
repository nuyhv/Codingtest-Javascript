function solution(chicken) {
    let coupons = chicken;
    let freeChickens = 0;
    
    while (coupons >= 10) {
        freeChickens += Math.floor(coupons / 10); // 쿠폰으로 받을 수 있는 치킨 수
        coupons = coupons % 10 + Math.floor(coupons / 10); // 남은 쿠폰 수
    }
    
    return freeChickens;
}