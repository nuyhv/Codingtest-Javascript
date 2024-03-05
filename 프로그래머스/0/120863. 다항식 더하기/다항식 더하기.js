function solution(polynomial) {
    let [x, num] = [0, 0];
    const arr = polynomial.split(' ');
    
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i].includes('x')) {
            arr[i].length > 1 ? x += parseInt(arr[i].slice(0, -1)) : x++;
        } 
        else num += parseInt(arr[i]);
    }
    
    if (x === 0) {
        return `${num}`;
    } else if (num === 0) {
        return `${x === 1 ? '' : x}x`;
    } else {
        return `${x === 1 ? '' : x}x + ${num}`;
    }
}