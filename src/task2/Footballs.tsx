import React from 'react';

type FootballsPropsType = {
    footballs: FootballsType[]
}
type FootballsType = {
    id: number,
    name: string,
    age: number,
}
export const Footballs = (props: FootballsPropsType) => {
    return (
        <ol>{props.footballs.map((objectFromFootballsArray, index) => {
            return (
                <li key={objectFromFootballsArray.id}>
                    <span>{objectFromFootballsArray.name}</span>
                    <span> age: {objectFromFootballsArray.age}</span>
                </li>
            )
        })}
        </ol>
    );
};