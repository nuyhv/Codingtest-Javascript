function solution(my_string) {
    const regex = /[a-z]/g;
    
    return [...my_string.replaceAll(regex, '')].sort((a, b) => a - b).map(str => Number(str));
}