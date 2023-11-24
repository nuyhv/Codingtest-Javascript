function solution(str_list) {
    const left = str_list.indexOf('l');
    const right = str_list.indexOf('r');
    
    if (left === -1 && right === -1) return [];
    else if (right === -1) return left === 0 ? [] : str_list.slice(0, left);
    else if (left === -1) return right === str_list.length ? [] : str_list.slice(right + 1);
    else if (left < right) return str_list.slice(0, left) 
    else if (right < left) return str_list.slice(right + 1);
}