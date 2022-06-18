import React, {useState, MouseEvent} from 'react';
import './App.css';
import {Header} from "./task1/Header";
import {Body} from "./task1/Body";
import {Footer} from "./task1/Footer";
import {Footballs} from "./task2/Footballs";
import {TopFootballs} from "./task2/TopFootballs";
import {Button} from "./task3/Button";
import {HookUseState} from "./task4/HookUseState";
import {NewFilter} from "./task5/NewFilter";
import {FullInput} from "./task6/FullInput";

export type topFootballsArray = {
    id: number
    lastName: string,
    club: string,
}
export type FilterType = 'all' | 'mu' | 'mc'

function App() {
    let [footballs, setFootballs] = useState([
        {id: 1, name: "Levandowski", age: 32},
        {id: 2, name: "Mbappe", age: 21},
        {id: 3, name: "Salah", age: 28},
        {id: 4, name: "Mane", age: 30},
        {id: 5, name: "Benzema", age: 35},
        {id: 6, name: "Rivaldo", age: 42},
        {id: 7, name: "Fernandinho", age: 36},
        {id: 8, name: "Roberto Carlos", age: 45},
        {id: 9, name: "Zidane", age: 47},
        {id: 10, name: "Cafu", age: 50},
        {id: 11, name: "Maradona", age: 60},
    ]);
    const [topFootballs, setTopFootballs] = useState<topFootballsArray[]>([
        {id: 1, lastName: 'messi', club: 'barcelona'},
        {id: 2, lastName: 'ronaldo', club: 'manchester united'},
        {id: 3, lastName: 'neymar', club: 'psg'},
    ]);
    const [clubs, setClubs] = useState([
        {club: 'Machester United', players: 'Martial', number: 11},
        {club: 'Machester United', players: 'Ronaldo', number: 7},
        {club: 'Manchester City', players: 'Fernandinho', number: 25},
        {club: 'Machester United', players: 'De Gea', number: 1},
        {club: 'Machester United', players: 'Pogba', number: 6},
        {club: 'Manchester City', players: 'Zinchenko', number: 11},
        {club: 'Machester United', players: 'Shaw', number: 6},
        {club: 'Manchester City', players: 'De Breyne', number: 15},
    ]);
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    const addMessage=(title:string)=>{
        let newMessage={message: title};
        setMessage([newMessage, ...message])
    }
    const [filter, setFilter] = useState<FilterType>('all')
    let currentClubs = clubs;
    if (filter === 'mu') {
        currentClubs = clubs.filter(filteredClubs => filteredClubs.club === 'Machester United')
    }
    if (filter === 'mc') {
        currentClubs = clubs.filter(filteredClubs => filteredClubs.club === 'Manchester City')
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    const Button1Foo = (adress: string, age: number) => {
        console.log(adress, age)
        alert(adress)
        alert(age)
    }
    const Button2Foo = (adress: string, age: number) => {
        console.log(adress, age)
        alert(adress)
        alert(age)
    }
    const Button3Foo = (adress: string, age: number) => {
        console.log(adress, age)
        alert(adress)
        alert(age)
    }
    return (
        <>
            <div className={'foot'}>
                <Header message={'messi'}/>
                <Body message={'ronaldo'}/>
                <Footer message={'neymar'}/>
            </div>
            <div className={'footballs'}>
                <Footballs footballs={footballs}/>
                <TopFootballs topFootballs={topFootballs}/>
            </div>
            <div className={'app'}>
                <Button name={'messiYouTubeChannel'}
                        callBack={() => Button1Foo('I am messi, i am from to argentina', 35)}/>
                <Button name={'ronaldoYouTubeChannel'}
                        callBack={() => Button2Foo('I am ronaldo, i am from to portugal', 37)}/>
                <Button name={'neymarYouTubeChannel'}
                        callBack={() => Button3Foo('I am neymar, i am from to brazil', 29)}/>
            </div>
            <HookUseState/>
            <NewFilter clubs={currentClubs} onClickFilterHandler={onClickFilterHandler}/>
            <div>
                <FullInput addMessage={addMessage}/>
                {message.map((el,index)=>{
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>
        </>
    );
}

export default App;
