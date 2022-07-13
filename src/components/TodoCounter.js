import React from "react";

function TodoCounter({searchValue, totalTask, completedTask}){

    let title = "";
    if (searchValue.length > 0) {
        title = `Results: ${searchValue}`
    } else {
        title = `You have completed ${completedTask} tasks out of ${totalTask}`;
    } 
    return(
        <h2>{title}</h2>
    );
}

export { TodoCounter }; 