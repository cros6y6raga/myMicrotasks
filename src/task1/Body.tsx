import React from 'react';
type BodyPropsType={
    message: string
}
export const Body = (props:BodyPropsType) => {
    return (
        <div className={'ronaldo'}>{props.message}</div>
    );
};