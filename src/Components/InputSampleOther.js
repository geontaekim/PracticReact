import React from 'react';
import { useState,useRef } from 'react';


const InputSample=()=>{
    const [text,setText]= useState({name:'',nicname:''});
    
    const {name,nicname}=text;

    const nameInput = useRef();

    function onChange(e) {
        const { value, name } = e.target; //  e.target 에서 name 과 value 를 추출
        setText({
            ...text,
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    }
    
    const reset=()=>{
       
          setText({
            name:'',nicname:''
          })
          nameInput.current.focus();
    }
        return(
                <div>
                    <input name='name' type="text" ref={nameInput} value={name} onChange={onChange}   placeholder='이름' /><br/>
                    <input name='nicname' type="text" value={nicname} onChange={onChange} placeholder='닉네임' />
                    <button onClick={reset}>초기화</button>

                    <div>
                       <p>이름:{name}</p>
                       <p>닉네임:{nicname}</p>
                       

                    </div>

                </div>

        )

}

export default InputSample;