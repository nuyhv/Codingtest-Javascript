function solution(num_list) {
    const sumOdd = num_list.filter((_, idx) => !(idx % 2)).reduce((acc, cur) => acc + cur, 0);
    const sumEven = num_list.filter((_, idx) => idx % 2 === 1).reduce((acc, cur) => acc + cur, 0);
    
    return sumOdd === sumEven ? sumOdd : (sumOdd > sumEven) ? sumOdd : sumEven;
}