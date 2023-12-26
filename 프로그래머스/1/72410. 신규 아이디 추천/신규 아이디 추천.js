function solution(new_id) {
    // 1단계 소문자로 치환
    let lowerStr = new_id.toLowerCase();

    // 2단계 특수문자 제거
    lowerStr = lowerStr.replace(/[^a-z0-9-_.]/g, '');

    // 3단계 연속된 마침표 치환
    lowerStr = lowerStr.replace(/\.{2,}/g, '.');

    // 4단계 처음이나 끝에 위치한 마침표 제거
    lowerStr = lowerStr.replace(/^\.|\.$/g, '');

    // 5단계 빈 문자열 처리
    if (lowerStr === '') {
        lowerStr = 'a';
    }

    // 6단계 16자 이상일 경우 자르기
    if (lowerStr.length >= 16) {
        lowerStr = lowerStr.slice(0, 15);
        // 마침표가 끝에 있을 경우 제거
        lowerStr = lowerStr.replace(/\.$/, '');
    }

    // 7단계 2자 이하일 경우 문자열 반복
    while (lowerStr.length <= 2) {
        lowerStr += lowerStr[lowerStr.length - 1];
    }

    return lowerStr;
}