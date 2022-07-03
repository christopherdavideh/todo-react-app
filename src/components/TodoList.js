import React from "react";
import { TodoContext } from "../Context/TodoContext";

function TodoList (props){
    const {noCompletedTask} = React.useContext(TodoContext)

    return(
        <section className="main-task-todo">
            <h3>{noCompletedTask} To-do</h3>
            <div>
                {props.children}
            </div>
        </section>
    );
}

export {TodoList};