function solution(quiz) {
    return quiz.map(el => {
        const [x, opt, y, _, z] = el.split(' ');
        
        switch (opt) {
            case '+': 
                return (Number(x) + Number(y) === Number(z)) ? 'O' : 'X';
            case '-': 
                return (Number(x) - Number(y) === Number(z)) ? 'O' : 'X';
            default:
                return 'X';
        }
    });
}