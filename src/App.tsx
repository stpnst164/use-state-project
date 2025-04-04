import { useState } from "react";

function App() {
  //useState hook
  const[count, setCount] = useState(0); //0 - начальное значение
  let prevState = 0; //предыдущее значение

  return (
    <>
      <h1>Hello</h1>
      <p>My name is Anastasiia Kharkovets</p>
      <button
        onClick={() =>
          setCount(prevState => prevState + 1) //с каждым кликом увеличивается счетчик
        }
      >Count is: {count}</button>
    </>
  )
}

export default App;