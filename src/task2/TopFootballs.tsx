import React from 'react';
import {topFootballsArray} from "../App";

export type TopFootballsPropsType = {
    topFootballs: topFootballsArray[]
}

export const TopFootballs = (props: TopFootballsPropsType) => {
    return (
        <table className={'table'}>
            {props.topFootballs.map((objectFromTopFootballsArray, index) => {
                return (
                    <tr key={objectFromTopFootballsArray.id} className={'tabletr'}>
                        <th className={'tableth'}>{objectFromTopFootballsArray.lastName}</th>
                        <th>{objectFromTopFootballsArray.club}</th>
                    </tr>
                )
            })}
        </table>
    );
};