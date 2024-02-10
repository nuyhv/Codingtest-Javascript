function solution(my_string) {
    let result = '';
    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];
        if (char >= 'A' && char <= 'Z') {
            result += char.toLowerCase(); 
        } else if (char >= 'a' && char <= 'z') {
            result += char.toUpperCase(); 
        }
    }
    return result;
}
