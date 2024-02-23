function solution(my_str, n) {
    let arr = [];
    
    for (let i = 0; i < my_str.length; i += n) {
        arr.push(my_str.slice(i, n + i));
    }
    
    return arr;
}