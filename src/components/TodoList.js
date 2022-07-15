import React from "react";

function TodoList ({noCompletedTask, completedTask, loading, todoTasks, doTasks, totalTask, totalSearch, onLoading, onEmpty, render}){
    let title = "";
    let subtitle = "";
    let msg;
    if (noCompletedTask) {
        subtitle = noCompletedTask;
        title = "To-do";
    } else if (completedTask) {
        subtitle = completedTask;
        title = "Done";
    }

    todoTasks && (msg = "You don't have to-do, create a task");
    doTasks && (msg = "Complete one of your tasks");
    if ((totalSearch !== 0 && todoTasks) || (totalSearch !== 0 && doTasks) || (totalSearch === 0 && totalTask.length > 0 && !todoTasks) | (totalSearch === 0 && totalTask.length > 0 && !doTasks)){
        console.log(totalTask.length);
        msg = "Don't have results";
    }

    const showTasks = todoTasks || doTasks

    return(
        <section className="main-task-todo">
            <h3>{`${subtitle} ${title}`}</h3>
            <div>
                {loading && onLoading()}
                {(!loading && !showTasks.length) && onEmpty(msg)}
                {showTasks.map(showTask => render(showTask))}
            </div>
        </section>
    );
}

export {TodoList};