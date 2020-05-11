import './App.css';
import React, { useState } from 'react'

//Hooksの学習
//-----------------------------------------複数をuseStateする---------------------------------------------
const App = props => {
  //App.defaultPropsで持たせるか、ここで定義するかできる
  // const initialStates = {
  //   name : '',
  //   price: 1000
  // }

  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  return (
    <>
      <p>現在の「{name}」の価格は、{price}円です</p>
      <button onClick= {() => setPrice(price + 100)}>+100</button>
      <button onClick= {() => setPrice(price - 100)}>-100</button>
      <button onClick= {() => setPrice(props.price)}>reset</button>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </>
  )
}

App.defaultProps = {
  name : '',
  price: 1000
}

//-----------------------------------------基本---------------------------------------------
// const App = () => {
//   //第1戻り値には値(状態)、2つ目は関数が帰ってくる。(set~が慣習)
//   const [count,setCount] = useState(0)
//   // console.log(count);
//   // console.log(setCount);

//   //setCountに値や関数を渡すことができる。
//   const increment = () => setCount(count + 1)
//   const decrement = () => setCount(count - 1)
//   const incrementFunc = () => setCount(previousCount => {
//     if (previousCount > 0) {
//       return 10;
//     } 
//     else {
//       return 0;
//     }
//   })
//   const decrementFunc = () => setCount(previousCount => previousCount - 1)

//   const reset = () => setCount(0)

//   return (
//     //<React.Flagment>は<>で省略できる
//     <>
//       <div>
//           count: {count}
//       </div>
//       <div>
//         <button onClick={increment}>+1</button>
//         <button onClick={decrement}>-1</button>
//       </div>
//       <div>
//         <button onClick={incrementFunc}>Plus</button>
//         <button onClick={decrementFunc}>Minus</button>
//       </div>
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// }

export default App;
