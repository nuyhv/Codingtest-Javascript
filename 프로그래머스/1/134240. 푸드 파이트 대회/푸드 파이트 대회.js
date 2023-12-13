function solution(food) {
    let str = '';
    
    for (let i = 1; i < food.length; i++) {
        str += String(i).repeat((food[i] % 2 === 0 ? food[i] : food[i] - 1) / 2);
    }
    
    return str.concat(0).concat([...str].reduce((acc, char) => char + acc));
}