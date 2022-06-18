import React, {useState} from 'react';

export const HookUseState = () => {
    let [a, setA] = useState(0)
    let onClickHandler1 = () => {
        setA(++a);
        console.log(a)
    }
    let onClickHandler2 = () => {
        setA(0);
        console.log(a)
    }
    return (
        <div className={'num'}>
            <div>{a}</div>
            <button onClick={onClickHandler1}>+</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    );
};