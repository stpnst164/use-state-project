import { useState } from "react";

function App() {
  //useState hook
  const[count, setCount] = useState(0); 0 //- начальное значение
  console.log(count); //начальное значение будет приравнено к count

  return (
    <>
      <h1>Hello</h1>
      <p>My name is Anastasiia Kharkovets</p>
      <button
        onClick={() => 
          setCount(5)
        }
        >Count</button>
    </>
  )
}

export default App;