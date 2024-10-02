import {days, sessions} from "../../static.json"
import {useEffect, useReducer, useState} from "react";
import {FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp} from "react-icons/fa";
import reducer from "./reducer.js";
import PageSpinner from "../Users/PageSpinner.jsx";


function BookList(){

    // 상태를 관리할 변수를 초기화하는 객체
    const initState = {
        group : "Rooms",
        bookableIndex : 0,
        hasDetails : false
    }
    
    // state는 상태값들을 모아놓은 오브젝트
    const [state, dispatch] = useReducer(reducer, initState)
    const {group, bookableIndex, hasDetails} = state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bookables, setBookables] = useState(null);



    useEffect(() => {
        fetch("http://localhost:3002/bookables")
            .then(response =>{
                if (!response.ok) {
                    throw new Error("통신 오류");
                }
                return response.json();
            })
            .then(data => {
                console.log("data : ", data)
                setBookables(data)
                setLoading(false)
            })
            .catch(error => {
                console.error("Fetch 실패")
                setError(error.message)
            })
    }, []);

    if(error){
        console.log("error : ", error)
        return <div>Error : {error}</div>
    }

    if(loading){
        return <div><PageSpinner/></div>
    }

    const groups = bookables ? [...new Set(bookables.map(b => b.group))] : [];
    const bookableGroup = bookables?.filter(b => (b.group === group)) || [];



    function nextBookableIndex() {
        dispatch({
            type : "NEXT_BOOKABLE",
            payload : bookableGroup.length
        })
    }

    function prevBookableIndex() {
        dispatch({
            type : "PREV_BOOKABLE",
            payload : bookableGroup.length
        })
    }

    function changeGroup(e){
        console.log("Current hasDetails state:", hasDetails);
        dispatch({
            type : "SET_GROUP",
            payload : e.target.value
        })
        console.log("Current hasDetails state:", hasDetails);
    }

    function changeBookableIndex(selectIndex){
        dispatch({
            type : "SET_BOOKABLE",
            payload : selectIndex
        })
    }

    function toggleDetails() {
        dispatch({
            type: "TOGGLE_HAS_DETAILS"
        })
    }

    const bookable = bookables ? bookableGroup[bookableIndex] : [];

    return (
        // return의 최상위태그는 무조건 1개
        <>
            {bookables && (<div>
                <select value={group} onChange={changeGroup}>
                    {groups.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
                <ul className="items-list-nav">
                    {bookableGroup.map((b, i) => (
                        <li key={b.id} className={i === bookableIndex ? "selected" : null}>
                            <button className="btn" onClick={() => changeBookableIndex(i)}>
                                {b.title}
                            </button>
                        </li>
                    ))}
                </ul>
                <p>
                    <button className="btn" onClick={prevBookableIndex}>
                        <FaArrowUp/><span>Prev</span>
                    </button>
                    <button className="btn" onClick={nextBookableIndex}>
                        <FaArrowDown/><span>Next</span>
                    </button>
                </p>
            </div>)}

            {/* 새로운 UI 추가, CSS 추가 : 상세 내용 */}
            {bookables && (<div className="book-details">
                <div className="item">
                    <div className="item-header">
                        <h2>{bookable.title}</h2>
                        <span className="controls">
                        <label>
                            <input type="checkbox" checked={hasDetails}
                                   onChange={toggleDetails}/>
                        </label>
                    </span>
                    </div>
                    <p>{bookable.notes}</p>
                    {hasDetails && (
                        <div className="item-details">
                            <h3>사용 가능한 요일과 세션</h3>
                            <div className="bookable-availability">
                                <ul>
                                    {bookable.days.sort().map(d => <li key={d}>{days[d]}</li>)}
                                </ul>
                                <ul>
                                    {bookable.sessions.sort().map(s => <li key={s}>{sessions[s]}</li>)}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>)}
        </>
    )
}

export default BookList;