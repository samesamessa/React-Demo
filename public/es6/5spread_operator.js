// Spread Operator
// iterable 객체에만 적용됩니다.
// 배열에서 자주 사용되는 연산자

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined)

// 배열 분해할 때도 스프레드 연산자 사용 가능:
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(rest)

//object
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  // 새로운 오브젝트 정의 : 두개의 오브젝트 프로퍼티를 합침
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle)     // color 은 수정되었음.