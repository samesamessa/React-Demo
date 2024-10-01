// 초기 App.jsx

import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";
import UserPicker from "./component/Users/UserPicker.jsx";
import BookingsPage from "./component/Bookings/BookingsPage.jsx";
import BookablePage from "./component/Bookables/BookablePage.jsx";
import UsersPage from "./component/Users/UsersPage.jsx";




// index.html이 처음 요청으로 반환되는 페이지
//       html은 더 만들지 않음. (SPA, single page application)
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className={"btn btn-header"}>
                  <FaCalendarAlt/>
                  <span>예약현황</span>
                </Link>
              </li>
              <li>
                <Link to="/bookable" className={"btn btn-header"}>
                  <FaDoorOpen/>
                  <span>예약자원</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className={"btn btn-header"}>
                  <FaUsers/>
                  <span>사용자</span>
                </Link>
              </li>
            </ul>
          </nav>
          <UserPicker/>
        </header>
        <Routes>
          <Route path="/bookings" element={<BookingsPage/>}/>
          <Route path="/bookable" element={<BookablePage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    /* 사용자가 선택한 메뉴 항목에 따라 화면에 보이는 UI를 결정함*/

  )
}

export default App
