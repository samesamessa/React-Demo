export default function getWeek(forDate, daysOffset = 0) {
    // 다음주, 이전주 offset으로 날짜 변경
    forDate = addDays(forDate, daysOffset)
    
    // 필요한 경우 요일도 계산
    // start, end를 게산하기 위해 요일이 필요함
    // '화'요일은 2를 리턴. 지금 날짜 해당 주의 start는 -2, end는 6-2
    const day = forDate.getDay()
    return {
        date : forDate,
        start : addDays(forDate, -day),                // 해당 주의 일요일 날짜
        end : addDays(forDate, 6-day)            // 해당 주의 토요일 날짜
    }

    function addDays(forDate, offset){
        const date = new Date(forDate.getTime());
        // 원하는 날짜만큼 + 또는 - 계산하여 새로운 날짜값 저장
        date.setDate(date.getDate() + offset);
        return date;

    }
}

/* 함수 테스트 */
let result = getWeek(new Date())
console.log("오늘 result : ", result)

result = getWeek(new Date(), 7)
console.log("일주일 후 result : ", result)

result = getWeek(new Date(), -7)
console.log("일주일 전 result : ", result)

result = getWeek(new Date('2024-11-06'))
console.log("지정한 날짜 result : ", result)