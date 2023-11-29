function solution(arr) {
    const rowCount = arr.length;
    const colCount = arr[0].length;
    
    if (rowCount > colCount) {
         return arr.map(el => [...el, ...Array(rowCount - colCount).fill(0)]);
     } 
    
    if (colCount > rowCount) {
        for(let i = 0; i < colCount - rowCount; i++) {
            arr.push(Array(colCount).fill(0))
        }
    }
    
    return arr;
}