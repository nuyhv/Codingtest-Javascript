function solution(s) {
    const arr = s.split(' ');
    return arr.filter((el, i) => !isNaN(el) && arr[i + 1] !== 'Z')
              .reduce((acc, cur) => acc + Number(cur), 0);
}