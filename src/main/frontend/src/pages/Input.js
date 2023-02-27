import React, {useState} from "react";

function Input() {
    const [txtValue, setTxtValue] = useState("");

    function onChange(e) {
        setTxtValue(e.target.value);
    }


    return (
        <div>
            <input type="text" value={txtValue} onChange={onChange} />
            <br />
            <p>{txtValue}</p>
        </div>
    );
};

export default Input;