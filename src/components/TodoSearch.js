import React from "react";

function TodoSearch ( {searchValue, setSearchValue, loading} ){

    const searchValueChange = (event) => {
        //console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return(
        <input className={`${!!loading && 'search-visible'}`} type="text" name="search" id="search" placeholder="Search tasks" value={searchValue} onChange={searchValueChange} disabled={loading}/>

    );
}

export {TodoSearch};