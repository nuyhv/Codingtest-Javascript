function solution(a, b) {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    const startDate = new Date("2016-01-01");
    
    // 입력받은 월과 일에 해당하는 날짜로 설정
    startDate.setMonth(a - 1);
    startDate.setDate(b);

    const dayOfWeekNumber = startDate.getDay();
    
    return daysOfWeek[dayOfWeekNumber];
}