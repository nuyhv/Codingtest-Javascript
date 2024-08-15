function solution(fees, records) {
    var answer = [];
    const [기본시간, 기본요금, 단위시간, 단위요금] = fees;
    const parkingTime = {};  
    const inTime = {};      

    const getMin = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    for (const [시각, 차량번호, 내역] of records.map((el) => el.split(' '))) {
        const curTime = getMin(시각);
        
        if (내역 === "IN") {
            inTime[차량번호] = curTime;
        } else {
            const parkedTime = curTime - inTime[차량번호];
            parkingTime[차량번호] = (parkingTime[차량번호] || 0) + parkedTime;
            delete inTime[차량번호];
        }
    }

    const endOfDay = getMin("23:59");
    for (const num in inTime) {
        const parkedTime = endOfDay - inTime[num];
        parkingTime[num] = (parkingTime[num] || 0) + parkedTime;
    }

    const calculateFee = (time) => {
        if (time <= 기본시간) return 기본요금;
        return 기본요금 + Math.ceil((time - 기본시간) / 단위시간) * 단위요금;
    };

    answer = Object.keys(parkingTime)
                   .sort((a, b) => a.localeCompare(b))
                   .map((num) => calculateFee(parkingTime[num]));

    return answer;
}
