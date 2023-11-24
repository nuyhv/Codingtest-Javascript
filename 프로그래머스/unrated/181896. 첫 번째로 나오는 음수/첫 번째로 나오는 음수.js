function solution(num_list) {
    const isNegative = (el) => el < 0;
    return num_list.findIndex(isNegative)
}