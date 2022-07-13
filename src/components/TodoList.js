import React from "react";

function TodoList ({noCompletedTask, children}){
    return(
        <section className="main-task-todo">
            <h3>{noCompletedTask} To-do</h3>
            <div>
                {children}
            </div>
        </section>
    );
}

export {TodoList};