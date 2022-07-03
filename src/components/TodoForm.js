import React from "react";
import { TodoContext } from "../Context/TodoContext";
import "../css/main.css"

function TodoForm () {
    // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const toggleButton = document.querySelector('.create-todo-button')
        
    // Función para cerrar el modal
    const onCancel = () => {
        setOpenModal(false);
        toggleButton.classList.toggle("animated");
    };
    
    
    
    // Función para agregar nuestro nuevo TODO
    const onSubmit = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();
        // Utilizamos nuestra función para añadir nuestro TODO
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        console.log(date);
        addTodo([title, description, date]);
        // Cerramos nustro modal
        //setOpenModal(false);
        toggleButton.classList.toggle("animated");
        // También estaría bien resetear nuestro formulario
        //setNewTodoValue('')
    };


    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="title">Title: </label><br />
            <input type="text" id="title" name="title"
                placeholder="Task name"
            /><br/>
            <label htmlFor="description">Description: </label><br/>
            <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Task details"
            /><br/>
            <label htmlFor="date">Date: </label><br/>
            <input type="datetime-local" id="date" name="date" />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                Cancel
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                Add
                </button>
            </div>
        </form>
    );
}

export {TodoForm};