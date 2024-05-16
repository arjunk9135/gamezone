import React from 'react';
import './card.css';

export const Card = (props) => {
    const { title, word1, word2 } = props;
    return (
        <div class="card">
            <div className='gamePic'>

            </div>
            <img
                style={{
                    width: '12rem',
                    position: 'relative',
                    top: '35%'
                }}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUi8n-bBpai8ClX4NWmSYclwHj-JLYicJ9A&s' />
            <p class="heading">
                {title}
            </p>
            <p>
                {word1}
            </p>
            <p>Game Zone
            </p></div>
    )
}
