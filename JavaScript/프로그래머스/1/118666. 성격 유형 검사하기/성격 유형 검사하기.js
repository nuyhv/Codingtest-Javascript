function solution(survey, choices) {
    let answer = ''
    const info = {
        'R': 0, 'T': 0,
        'C': 0, 'F': 0,
        'J': 0, 'M': 0,
        'A': 0, 'N': 0
    };

    const surv = survey.map(str => [...str]);

    for (let i = 0; i < choices.length; i++) {
        const [left, right] = surv[i];

        let choice = choices[i]; 

        switch (choice) { 
            case 1: info[left] += 3; break;
            case 2: info[left] += 2; break;
            case 3: info[left] += 1; break;
            case 4: continue;
            case 5: info[right] += 1; break;
            case 6: info[right] += 2; break;
            case 7: info[right] += 3; break;
        }
    }

    answer = (info.R >= info.T ? 'R' : 'T') +
        (info.C >= info.F ? 'C' : 'F') +
        (info.J >= info.M ? 'J' : 'M') +
        (info.A >= info.N ? 'A' : 'N');
    
    return answer;
}