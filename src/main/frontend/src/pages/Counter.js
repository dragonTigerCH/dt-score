import React, {useState} from "react";

function Counter() {
    const [num, setNumber] = useState(0);

    function increase(){
        setNumber(num+1);
    }
    function decrease(){
        setNumber(num-1);
    }

    return (
        <div>
            <button className={'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'} onClick={increase}>+1</button>
            <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'} onClick={decrease}>-1</button>
            <p className="text-base font-bold text-blue-500">{num}</p>
        </div>
    )
}

export default Counter