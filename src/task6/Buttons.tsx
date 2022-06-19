import React from 'react';
type ButtonsPropsType = {
    name: string,
    callBack: ()=> void
}
export const Buttons = (props:ButtonsPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};