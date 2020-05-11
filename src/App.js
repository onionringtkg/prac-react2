import './App.css';
import React, { useState, useEffect } from 'react'

//Hooksの学習
//-----------------------------------------複数をuseStateする---------------------------------------------
const App = props => {
  //App.defaultPropsで持たせるか、ここで定義するかできる
  // const initialStates = {
  //   name : '',
  //   price: 1000
  // }

  //オブジェクトも取れる
  const [state, setState] = useState(props)
  // const [name, setName] = useState(props.name)
  // const [price, setPrice] = useState(props.price)

  //コールバックはuseEffect
  useEffect(() => {
    console.log('useEffect likes componentDidMount or componentDidUpdate.');
  })
  useEffect(() => {
    console.log('useEffect likes componentDidMount only when loaded.');
  }, [])
  useEffect(() => {
    console.log('useEffect only when name is changed.');
  }, [state.name])

  return (
    <>
      <p>現在の「{state.name}」の価格は、{state.price}円です</p>
      <button onClick= {() => setState({...state, price: state.price + 100})}>+100</button>
      <button onClick= {() => setState({...state, price: state.price - 100})}>-100</button>
      <button onClick= {() => setState(props)}>reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
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
