import React from 'react';
import '../styles/main.css'

const Main = (props) => {
    return (
        <div className='main'> 
            <img src={props.image} alt='arts' className='images' />
            <p className='price'>{props.price}</p>
            <p className='name'>{props.name}</p>
            <button>Купить</button>
        </div>
    );
};

export default Main;