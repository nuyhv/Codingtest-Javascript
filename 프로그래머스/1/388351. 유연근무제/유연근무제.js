

function solution(schedules, timelogs, startday) {
    let answer = 0;
    function hhmmToMinutes(hhmm) {
        let hours = Math.floor(hhmm / 100); 
        let minutes = hhmm % 100;          
        return hours * 60 + minutes;
    }
    
    for(let i = 0; i < schedules.length; i++) {
        let isLate = false;
        for (let j = 0; j < 7; j++) {
            if ((j + startday) % 7 === 6 || (j + startday) % 7 === 0) continue;    

            if (hhmmToMinutes(timelogs[i][j]) > hhmmToMinutes(schedules[i]) + 10) {
                isLate = true; 
                break;
            }
        }
        if (!isLate) answer++;
    }

    return answer;
}

