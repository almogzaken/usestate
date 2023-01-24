import { useState } from "react";

function Counter() {
    const [count,setCount] = useState(0)

    function incr(){
        setCount(
            function(oldCount){
                return oldCount+1;
            }
        )
        console.log(count)
    }

    return (
        <div>
            <h1> counter</h1>
            <p> Counter is at {count}</p>
            <button onClick={incr}> Click to add 1 to Counter</button>
        </div>
    );
}

export default Counter;