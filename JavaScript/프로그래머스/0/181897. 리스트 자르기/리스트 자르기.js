function solution(n, slicer, num_list) {
    var answer = [];
    
    switch (n) {
        case 1: 
            answer = num_list.slice(0, slicer[1] + 1);
            break;
        case 2: 
            answer = num_list.slice(slicer[0]);
            break;
        case 3: 
            answer = num_list.slice(slicer[0], slicer[1] + 1);
            break;
        case 4: 
            answer = num_list.slice(slicer[0], slicer[1] + 1).filter((_, idx) => idx % slicer[2] === 0);
            break;
    }
    
    return answer;
}