import './App.css';
import Counter from './Counter';
import { useState } from "react";



function App() {
  const [delta,setdelta] = useState(1)
  const [maxCounter, setMaxCounter] = useState(100)
  function handleDelta(event){
  console.log(event)
  setdelta(Number(event.target.value))
}
function handleMax(event){
  setMaxCounter(Number(event.target.value))
}
  return (
    <div className="App">
      usestart
      <input type = "number" value={delta} onChange = {handleDelta}/>
      <input type = "number" value={maxCounter} onChange = {handleMax}/>
      <Counter delta ={delta} maxCounter = {maxCounter}/>
      <Counter delta ={delta} maxCounter = {maxCounter}/>
    </div>
  );
}

export default App;
