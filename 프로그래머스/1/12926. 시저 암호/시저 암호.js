function solution(s, n) {
    return s
        .split('')
        .map(char => {
            // 공백이면 그대로 반환
            if (char === ' ') {
                return char;
            }

            // 대문자인 경우
            if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + n) % 26 + 'A'.charCodeAt(0));
            }
            
            // 소문자인 경우
            if (char >= 'a' && char <= 'z') {
                return String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + n) % 26 + 'a'.charCodeAt(0));
            }
        })
        .join('');
}