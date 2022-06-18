import React from 'react';
type FooterPropsType = {
    message: string
}
export const Footer = (props: FooterPropsType) => {
    return (
        <div className={'neymar'}>{props.message}</div>
    );
};