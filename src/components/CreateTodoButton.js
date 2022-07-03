import React from "react";
import { TodoContext } from "../Context/TodoContext";

function CreateTodoButton(){
    const {setOpenModal} = React.useContext(TodoContext);
    const toggleButton = document.querySelector('.create-todo-button');
    const onOpenModal = () => {
        setOpenModal(prevOpenModal => !prevOpenModal);
        toggleButton.classList.toggle("animated");
    }

    return(
        <button className="create-todo-button" title="Add new Task" onClick={onOpenModal}>+</button>
    )
}

export {CreateTodoButton};