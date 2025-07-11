function solution(ingredient) {
    let count = 0;
    let stack = [];

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        if (stack.slice(-4).join('') === '1231') {
            stack.splice(-4);
            count++;
        }
    }

    return count
}
