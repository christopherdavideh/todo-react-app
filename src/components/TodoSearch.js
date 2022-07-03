import React from "react";
import { TodoContext } from "../Context/TodoContext";

function TodoSearch (){

    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const searchValueChange = (event) => {
        //console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return(
        <input type="text" name="search" id="search" placeholder="Search tasks" value={searchValue} onChange={searchValueChange}/>
    );
}

export {TodoSearch};