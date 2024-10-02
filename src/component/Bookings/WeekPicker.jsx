import {useReducer} from "react";
import reducer from "../Bookings/weekReducer.js";
import getWeek from "./date-Util.js";
import {FaCalendarDay, FaChevronLeft, FaChevronRight} from "react-icons/fa";

function WeekPicker({date}) {
    // date값으로 getWeek 함수를 통해 state(week)를 초기화
    const [week, dispatch] = useReducer(reducer, date, getWeek)
    return (
        <div>
            <p className="date-picker">
                <input type="date" defaultValue={formatDate(new Date())} onChange={(e) =>
                    dispatch({type: "SET_DATE", payload: e.target.value})}/>
                {/*/!* 입력값을 state로 관리*/}
                {/*    이 예제에서는 날짜 타입으로 변환되는 문자열이 아니면*/}
                {/*    예상치 않은 결과로 보이기 때문에 입력값의 상태를 관리하는건*/}
                {/*    기능에 맞는 경우에만 사용*/}
                {/* *!/*/}
                {/*<input type="text" defaultValue={formatDate(new Date())} onChange={(e) =>*/}
                {/*    dispatch({type: "SET_DATE", payload: e.target.value})}/>*/}
                <button
                    className="btn"
                    onClick={() => dispatch({type: "PREV_WEEK"})}>
                    <FaChevronLeft/>
                    <span>Prev</span>
                </button>
                <button
                    className="btn"
                    onClick={() => dispatch({type: "TODAY"})}>
                    <FaCalendarDay/>
                    <span>Today</span>
                </button>
                <button
                    className="btn"
                    onClick={() => dispatch({type: "NEXT_WEEK"})}>
                    <FaChevronRight/>
                    <span>Next</span>
                </button>
            </p>
            <p>
                {/*{week.start.toLocaleString()} ~ {week.end.toLocaleString()}*/}
                {formatDate(week.start)} ~ {formatDate(week.end)}
            </p>
        </div>
    )

}

function formatDate(date){
    const year = date.getFullYear()
    const month = String(date.getMonth()+1).padStart(2,"0")
    const day = String(date.getDate()).padStart(2,"0")

    return [year,month,day].join('-')
}

export default WeekPicker;