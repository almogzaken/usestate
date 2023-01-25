import { useState } from "react";

function Counter(props) {
    const {delta} = props
    const {maxCounter} = props
    const [count,setCount] = useState(1)

    function incr(){
        setCount(
            function(oldCount){
                if (oldCount+ delta > maxCounter) return 0
                return oldCount+delta
            }
        )
    }
    function reset(){
        setCount(0)
    }

    return (
        <div>
            <h1> counter</h1>
            <p> Counter is at {count}</p>
            <button onClick={incr}> Click to add {delta} to Counter</button>
            <button onClick={reset}> click to reset counter</button>
        </div>
    );
}

export default Counter;