import './App.css';
import React, { useState } from 'react'

//Hooksの学習
const App = () => {
  //第1戻り値には値(状態)、2つ目は関数が帰ってくる。(set~が慣習)
  const [count,setCount] = useState(0)
  // console.log(count);
  // console.log(setCount);

  //setCountに値や関数を渡すことができる。
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const incrementFunc = () => setCount(previousCount => {
    if (previousCount > 0) {
      return 10;
    } 
    else {
      return 0;
    }
  })
  const decrementFunc = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)

  return (
    //<React.Flagment>は<>で省略できる
    <>
      <div>
          count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={incrementFunc}>Plus</button>
        <button onClick={decrementFunc}>Minus</button>
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
