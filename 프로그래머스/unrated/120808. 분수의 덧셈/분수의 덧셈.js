function solution(numer1, denom1, numer2, denom2) {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    const lcm = denom1 * denom2 / gcd(denom1, denom2);

    const newNumer1 = numer1 * (lcm / denom1);
    const newNumer2 = numer2 * (lcm / denom2);
    const sumNumer = newNumer1 + newNumer2;

    const reducedGCD = gcd(sumNumer, lcm);
    const reducedNumer = sumNumer / reducedGCD;
    const reducedDenom = lcm / reducedGCD;

    return [reducedNumer, reducedDenom];
}
