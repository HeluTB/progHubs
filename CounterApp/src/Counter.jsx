import React, {useState} from "react";
import "./Counter.css";

const Counter =()=>{
    const [count,setCount] = useState(0);
    return(
        <div className="counter">
            <h1>{count}</h1>
            <div className="buttons">
                <button onClick={()=>setCount(count-1)}>-</button>
                <button onClick={()=>setCount(0)}>Reset</button>
                <button onClick={()=>setCount(count+1)}>+</button>
            </div>
        </div>
    );
};
export default Counter;