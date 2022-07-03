import React from 'react';
import '../css/main.css'

function EmptyTodo (props) {
        return(
        <section className='empty-todo-container'>
            <p>{props.msg}</p>
            <img src={props.img} alt='Graphic to reference todo' width="250" height="250"/>
        </section>
    );
}

export {EmptyTodo};