function solution(my_string, s, e) {
    return my_string.slice(0, s).concat(my_string.slice(s, e + 1).split('').reverse().join('')).concat(my_string.slice(e + 1, my_string.length))
}