import React, { useState } from "react";
import './Counter.css'

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = (event) => {
        event.preventDefault();
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = (event) => {
        event.preventDefault();
        setCount((prevCount) => prevCount - 1);
    };

    // const reset = (event) => {
    //     event.preventDefault();
    //     setCount(0);
    // };
    const max = () => {
      setCount(props.max);
  };
    const changeValue = (value) => {
        setCount(parseInt(value));
    };

    return (
        <>
            
                {/* <h1>Count: {count}</h1> */}
               
                {/* <button
                    onClick={(event) => {
                        if (event.key === "Enter") {
                            changeValue(event.target.value);
                        }
                    }}
                >
                    Enter
                </button> */}
                <div className="counter">
                    <button onClick={decrement} className="btn btn-counter">
                        -
                    </button>
                    <input className={'number'}
                    type="number"
                    placeholder="0"
                    value={count}
                    onChange={(event) => changeValue(event.target.value)}
                />
                    <button onClick={increment} className="btn btn-counter">
                        +
                    </button>
                    <button onClick={max} className="btn btn-counter max">
                    MAX
                </button>
                </div>
                
            
        </>
    );
};

export default Counter;
