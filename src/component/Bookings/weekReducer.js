import getWeek from "./date-Util.js";

export default function reducer(state, action){
    switch(action.type){
        case "NEXT_WEEK" :
            /* 지정된 날짜 +7 */
            return getWeek(state.date, 7);
        case "PREV_WEEK" :
            /* 지정된 날짜 -7 */
            return getWeek(state.date, -7);
        case "TODAY" :
            /* 오늘 날짜 */
            return getWeek(new Date());
        case "SET_DATE" :
            /* 임의의 날짜 */
            return getWeek(new Date(action.payload));
        default :
            // return state
            throw new Error(`알 수 없는 action type : ${action.type}`);

    }
}

// return은 getWeek 메소드로 변경된 state.date 값 전달
// state는 오브젝트 : date(선택 날짜), start(date 기준 해당 주의 시작 날), end(마지막 날)
// getWeek 메소드는 다른 컴포넌트에서도 실행하기 때문에 따로 파일을 작성