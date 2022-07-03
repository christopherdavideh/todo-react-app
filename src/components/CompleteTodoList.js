import React from "react";
import { TodoContext } from "../Context/TodoContext";

function CompleteTodoList(props){
    const {completedTask} = React.useContext(TodoContext)
    return(
        <section className="main-task-todo">
            <h3>{completedTask} Done</h3>
            <div>
                {props.children}
            </div>
        </section>
    );
}

export {CompleteTodoList};