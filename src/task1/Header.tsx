import React from 'react';

type HeaderPropsType = {
    message: string
}
export const Header = (props: HeaderPropsType) => {
    return (
        <div className={'messi'}>{props.message}</div>
    );
};