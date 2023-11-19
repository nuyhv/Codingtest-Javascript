function solution(a, b, c, d) {
    const dices = [a, b, c, d];
    if (new Set(dices).size === 1) { 
        return 1111 * a; 
    } else if (a == b && b == c) { 
        return Math.pow(10 * a + d, 2)
    } else if (a == c && c == d) { 
        return Math.pow(10 * a + b, 2)
    } else if (a == b && b == d) { 
        return Math.pow(10 * a + c, 2)
    } else if (b == c && c == d) { 
        return Math.pow(10 * b + a, 2)
    } else if (a == b && c == d) { 
        return ((a + c) * (Math.abs(a - c)));
    } else if (a == c && b == d) { 
        return ((a + b) * (Math.abs(a - b)));
    } else if (a == d && b == c) {
        return ((a + b) * (Math.abs(a - b)));
    } else if (a == b && c != d) {
        return (c * d);
    } else if (a == c && b != d) { 
        return (b * d);
    } else if (a == d && b != c) { 
        return (b * c);
    } else if (b == c && a != d) {
        return (a * d);
    } else if (b == d && a != c) { 
        return (a * c);
    } else if (c == d && a != b) {
        return (a * b);
    } else {
        return Math.min(a, b, c, d);
    }
}