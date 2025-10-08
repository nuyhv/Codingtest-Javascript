function solution(video_len, pos, op_start, op_end, commands) {
    const convertSec = (str) => {
        const [m, s] = str.split(':');
        return Number(m * 60) + Number(s)
    }
    
    const convertMS = (sec) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
    
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    
    let [len_sec, pos_sec, start_sec, end_sec] = [video_len, pos, op_start, op_end].map(convertSec);

    for (const command of commands) {
        if (pos_sec >= start_sec && pos_sec <= end_sec) pos_sec = end_sec;
        
        if (command === 'prev') {
            pos_sec -= 10;
            if (pos_sec < 0) pos_sec = 0;
            if (pos_sec >= start_sec && pos_sec <= end_sec) pos_sec = end_sec;
        }
        
        if (command === 'next') {
            pos_sec += 10;
            if (pos_sec > len_sec) pos_sec = len_sec;
            if (pos_sec >= start_sec && pos_sec <= end_sec) pos_sec = end_sec;
        }
    }
    
    return convertMS(pos_sec)
}