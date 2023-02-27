import React, {useState} from "react";

function Input2() {
    const [txtValues, setTxtValues] = useState({
        name : "",
        email : "",
        tel : ""
    });

    const {name,email,tel} = txtValues;

    function onChange(e) {
        const value = e.target.value;
        const id = e.target.id;

        setTxtValues({
            ...txtValues,
                [id]:value,
        });
    };

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange}/>
            </div>
            <br />
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Tel : {tel}</p>
        </div>
    );
};

export default Input2;