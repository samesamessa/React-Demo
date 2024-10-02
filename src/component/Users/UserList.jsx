import {useEffect, useState} from "react";
import PageSpinner from "./PageSpinner.jsx";

// 서버에서 가져온 것이 아닌 단순한 오브젝트 데이터를 가져온 것

function UserList(){
    const [users, setUsers] = useState(null);
    // fetch 중 오류, 로딩 중에 대한 상태값 저장
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [userIndex, setUserIndex] = useState(0);
    const user = users?.[userIndex];    // 자바의 optional 역할 연산자
    // users가 null이 아닐때만 실행함

    // api 서비스 제공하는 서버로부터 데이터 가져오기
    useEffect(() => {
      fetch("http://localhost:3002/users")
          .then(response => {
            return response.json()
          })
          .then(data => {
              console.log("data : ", data)
              setUsers(data)
              setLoading(false);
          })
          .catch(error => {
              setError(error.message)
          })
    }, []);
    // [] 의존값. 없다면 컴포넌트가 실행될 때 처음 한번만 실행됨
    // 의존값이 있으면 data값이 변경될 때마다 useEffect가 실행됨.
    if(error){
        return <div>오류 : {error}</div>
    }

    if(loading) {
        // return <div>로 딩 중 ......</div>
        return <PageSpinner/>
    }

    return (
        <>
            {users && (<ul className="users items-list-nav">
                {users.map((u, i) => (
                    <li
                        key={u.id}
                        className={i === userIndex ? "selected" : null}
                    >
                        <button
                            className="btn"
                            onClick={() => setUserIndex(i)}
                        >{u.name}
                        </button>
                    </li>
                ))}
            </ul>)}
            {user && (<div className="item user">
                <div className="item-header">
                    <h2>{user.name}</h2>
                </div>
                <div className="user-details">
                    <h3>{user.title}</h3>
                    <p>{user.notes}</p>
                </div>
            </div>)}
        </>
    )
}

export default UserList;