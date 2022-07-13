import React from "react";

function TodoSearch ( {searchValue, setSearchValue} ){

    const searchValueChange = (event) => {
        //console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return(
        <input type="text" name="search" id="search" placeholder="Search tasks" value={searchValue} onChange={searchValueChange}/>
    );
}

export {TodoSearch};