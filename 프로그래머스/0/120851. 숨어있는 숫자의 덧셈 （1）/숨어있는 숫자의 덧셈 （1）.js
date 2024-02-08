function solution(my_string) {
    const num = [...my_string].filter(el => !isNaN(el)).map(el => Number(el));
    return num.reduce((acc, cur) => acc + cur);
}