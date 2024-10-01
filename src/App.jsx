// 초기 App.jsx

import './App.css'
import {Car} from "./basic/List.jsx";
import Garage from "./basic/List.jsx";
import GarageKorean from "./basic/Objects.jsx";


// index.html이 처음 요청으로 반환되는 페이지
//       html은 더 만들지 않음. (SPA, single page application)
function App() {

  return (
    <>
        {/* brand라는 property를 넘겨줌 */}
        <Car brand="소나타"/>
        <Garage/>
        <GarageKorean/>
    </>
  )
}

export default App
