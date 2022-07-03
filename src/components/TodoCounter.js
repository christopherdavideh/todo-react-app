import React from "react";
import { TodoContext } from "../Context/TodoContext";

function TodoCounter(){
    const {searchValue, totalTask, completedTask} = React.useContext(TodoContext);

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