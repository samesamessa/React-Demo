import WeekPicker from "./WeekPicker.jsx";

function BookingsPage() {
    return (

        <main className="bookings-page">
            {/*<WeekPicker date="" day="" month=""/>
                WeekPicker에서 받아야될 인자 : date, day, month
                WeekPicker의 함수에서 props로 받거나 => props.date 형식으로
                오브젝트를 분해해서 {date, day, month}로 받는다. => 바로 date로 받음.
            */}
            <WeekPicker date={new Date()}/>
        </main>
    )
}

export default BookingsPage;