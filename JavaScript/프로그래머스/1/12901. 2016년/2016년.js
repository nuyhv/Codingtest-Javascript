function solution(a, b) {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    const startDate = new Date("2016-01-01");
    
    startDate.setMonth(a - 1);
    startDate.setDate(b);

    const dayOfWeekNumber = startDate.getDay();
    
    return days[dayOfWeekNumber];
}