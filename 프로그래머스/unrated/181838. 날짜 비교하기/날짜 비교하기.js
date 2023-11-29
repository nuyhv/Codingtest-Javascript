function solution(date1, date2) {
    const [year1, month1, day1] = date1;
    const [year2, month2, day2] = date2;
    return new Date(year1, month1 - 1, day1) < new Date(year2, month2 - 1, day2) ? 1 : 0;
}