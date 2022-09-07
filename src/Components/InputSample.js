import React from 'react';
import { useState } from 'react';


const InputSample=()=>{
    const [text,setText]= useState('');
    const setValue=(e)=>{
        return(
            setText(e.target.value)
        );
    }
    const reset=()=>{
        return(setText(''));
    }
        return(
                <div>
                    <input type="text" value={text} onChange={setValue} />
                    <button onClick={reset}>초기화</button>

                    <div>
                        <b>값:{text} </b>

                    </div>

                </div>

        )

}

export default InputSample;