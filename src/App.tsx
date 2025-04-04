import { useState } from "react";

function App() {
  //useState hook
  const[count1, setCount1] = useState(0); //hook1
  const[count2, setCount2] = useState(0); //hook2

  return (
    <>
      <div className="player-card">
        <div className="player-card__title">Дима</div>
        <div 
        className="player-card__counter"
        >{count1}</div>
        <button
        onClick={() => setCount1(() => count1 + 1)}>+</button>
        <button
        onClick={() => setCount1(() => count1 - 1)}>-</button>
      </div>
      <div className="player-card">
        <div className="player-card__title">Настя</div>
        <div className="player-card__counter">{count2}</div>
        <button
        onClick={() => setCount2(() => count2 + 1)}>+</button>
        <button
        onClick={() => setCount2(() => count2 - 1)}>-</button>
      </div>
    </>
  )
}

export default App;