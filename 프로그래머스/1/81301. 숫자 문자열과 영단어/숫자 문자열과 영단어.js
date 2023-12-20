function solution(s) {
    const digitToWord = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    };

    let answer = '';
    let currentWord = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (isNaN(char)) {
            // 현재 문자가 숫자가 아닌 경우
            currentWord += char;

            if (digitToWord[currentWord]) {
                // 현재 문자열이 숫자에 해당하는 영단어인 경우
                answer += digitToWord[currentWord];
                currentWord = ''; // 초기화
            }
        } else {
            // 현재 문자가 숫자인 경우
            answer += char;
        }
    }

    return parseInt(answer, 10); // 문자열을 정수로 변환
}