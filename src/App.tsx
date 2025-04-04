import { useState } from "react";

function App() {
  //useState hook
  const[count, setCount] = useState(0); 0 //- начальное значение

  return (
    <>
      <h1>Hello</h1>
      <p>My name is Anastasiia Kharkovets</p>
      <button
        onClick={() => 
          setCount(5)
        }
        >Count is: {count}</button>
    </>
  )
}

export default App;