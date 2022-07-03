import React from "react";

function TodoItem(props){
    return(
        //console.log(props.task)
        //<li><span>✔</span>{props.text.title}<span>❌</span></li>
        <div className={`main-task-todo__boody ${props.text.completed && 'active'}`}>
            <input type="checkbox" className="task-list" name={props.text.id} id={props.text.id} defaultChecked={props.text.completed} onClick={props.completeTask} />
            <div className="main-task-todo__detail">
                <label className={`${props.text.completed && 'active'}`}>{props.text.title}</label>
                <p>{props.text.description}</p>
                <div className="main-task-todo__date">
                    <span className="main-task-todo__calendar"></span>
                    <p>{props.text.date}</p>
                </div>
            </div>
            <span className="main-task-todo__delete" onClick={props.deleteTask}></span>

        </div>
    );
}


/*const detail = document.querySelector('.main-task-todo__detail');
const expand = () => {
    if (detail){
        console.log(detail);
        detail.addEventListener('click', () => {
            console.log("expandir");
        });
    }
}

expand();*/




export {TodoItem};