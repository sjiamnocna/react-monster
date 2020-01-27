import React from 'react'
import './card.style.css'

export const Card = (props) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=2&size=180x180`} />
            <h2> {props.monster.name} </h2>
            <p>{props.monster.email}</p>
        </div>
    );
}