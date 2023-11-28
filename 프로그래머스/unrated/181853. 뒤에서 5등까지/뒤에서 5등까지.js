function solution(num_list) {
    return num_list.sort((x, y) => x - y).slice(0, 5);
}