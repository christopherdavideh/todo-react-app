import React from "react";

function CompleteTodoList({completedTask, children}){
    return(
        <section className="main-task-todo">
            <h3>{completedTask} Done</h3>
            <div>
                {children}
            </div>
        </section>
    );
}

export {CompleteTodoList};