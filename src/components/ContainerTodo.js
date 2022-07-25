import React from "react";

function ContainerTodo({children, loading}){
    return (
        <div className='main-container'>
            {React.Children.toArray(children).map(child => React.cloneElement(child, {loading}))}
        </div>
    );
}

export {ContainerTodo}