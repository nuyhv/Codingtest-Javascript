function solution(d, budget) {
    // d를 오름차순 정렬
    d.sort((a, b) => a - b);

    let count = 0;

    // 정렬된 배열에서 예산을 할당할 수 있는 부서 수 계산
    for (const num of d) {
        if (budget >= num) {
            budget -= num;
            count++;
        } else {
            break; // 예산 초과시 종료
        }
    }

    return count;
}