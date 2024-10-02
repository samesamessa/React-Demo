// state는 상태값 오브젝트(state, payload), action은 무엇을 어떻게 처리할 것인가 전달
//          리턴은 새로운 상태값
export default function reducer(state, action){
    switch (action.type){
        case "SET_GROUP":
            return{
                ...state,                       // 기존 state 값을 복사
                group:action.payload,           // 그룹을 payload 값으로 변경
                bookableIndex: 0,                // 인덱스를 0으로 초기화
                hasDetails : false
            }

        case "SET_BOOKABLE":
            return{
                ...state,                       // 기존 state 값 복사
                bookableIndex: action.payload   // 인덱스를 payload 값으로 변경
            }

        case "TOGGLE_HAS_DETAILS":
            return{
                ...state,                       // 기존 state값 복사
                hasDetails: !state.hasDetails   // hasDetails을 반대값으로 변경 (true<->false)
            }

        case "NEXT_BOOKABLE":
        {
            // const count = state.bookables.filter(
            // b=> b.group === state.group).length;
            return{
                ...state,                                                   // 기존 state값 복사
                bookableIndex: (state.bookableIndex +1) % action.payload    // 인덱스를 다음 인덱스 값으로
            };
        }

        case "PREV_BOOKABLE":
        {
            return {
                ...state,
                bookableIndex: (state.bookableIndex - 1 + action.payload) % action.payload
            };
        }

        default:    //꼭 필요함.
            return state;

    }
}