import { useState } from "react";

function Counter() {
    const [count,setCount] = useState(1)
    const [delta,setdelta] = useState(1)

    function incr(){
        setCount(
            function(oldCount){
                return oldCount+delta
            }
        )
        console.log(count)
    }
    function handleDelta(e){
        console.log(e)
        setdelta(Number(e.target.value))
    }
    function reset(){
        setCount(0)
    }

    return (
        <div>
            <h1> counter</h1>
            <input type = "number" value={delta} onChange = {handleDelta}/>
            <p> Counter is at {count}</p>
            <button onClick={incr}> Click to add {delta} to Counter</button>
            <button onClick={reset}> click to reset counter</button>
        </div>
    );
}

export default Counter;