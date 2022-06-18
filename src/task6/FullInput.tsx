import React, {ChangeEvent, useState} from 'react';
type addMessage={
    addMessage:(title:string)=>void
}
export const FullInput = (props: addMessage) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler=()=>{
        props.addMessage(title)
    }
    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};