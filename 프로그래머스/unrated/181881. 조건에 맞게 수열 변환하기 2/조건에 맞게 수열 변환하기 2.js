function solution(arr) {
    const mapping = (array, count) => {
        for (let i = 0; i < count; i++) {
            array = array.map((el) => {
                if (el >= 50 && el % 2 === 0) return el / 2;
                else if (el < 50 && el % 2 === 1) return el * 2 + 1;
                else return el;
            });
        }
        return array;
    }

    let x = 0;
    
    while (true) {
        const currentArr = mapping(arr, x);
        const nextArr = mapping(arr, x + 1);
        
        if (JSON.stringify(currentArr) === JSON.stringify(nextArr)) return x;
        
        x++;
    }
}