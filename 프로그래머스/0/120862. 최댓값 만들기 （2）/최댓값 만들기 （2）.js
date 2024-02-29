function solution(numbers) {
    numbers.sort((a, b) => b - a);

    if (numbers.length < 2) {
        return 0;
    }

    return Math.max(
        numbers[0] * numbers[1],
        numbers[numbers.length - 1] * numbers[numbers.length - 2]
    );
}
