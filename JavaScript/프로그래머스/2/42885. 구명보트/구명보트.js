function solution(people, limit) {
    var boat = 0;
    let i = 0;
    let j = people.length - 1;

    people.sort((a, b) => a - b);

    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            i++;
        }
        j--;
        boat++;
    }
    
    return boat
}