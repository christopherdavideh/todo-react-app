import React from "react";

function TodoMain ({children, loading}){
    return(
        <main>            
            {React.Children.toArray(children).map((child) => React.cloneElement(child, { loading }))}
        </main>
    );
}

export {TodoMain};