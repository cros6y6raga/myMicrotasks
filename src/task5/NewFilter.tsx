import React from 'react';
import {FilterType} from "../App";

type NewFilterType = {
    clubs: NewFilterTypeArray[],
    onClickFilterHandler:(Filter: FilterType)=> void
}
type NewFilterTypeArray = {
    club: string,
    players: string,
    number: number,
}
export const NewFilter = (props: NewFilterType) => {
    return (
        <div className={'club'}>
            <ul>
                {props.clubs.map((objFromClubsArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromClubsArr.club}</span>
                            <span>{objFromClubsArr.players}</span>
                            <span>{objFromClubsArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('mu')}>mu</button>
                <button onClick={() => props.onClickFilterHandler('mc')}>mc</button>
            </div>
        </div>
    );
};