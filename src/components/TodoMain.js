import React from "react";

function TodoMain (props){
    return(
        <main>
            {props.children(props.error)}
        </main>
    );
}

export {TodoMain};