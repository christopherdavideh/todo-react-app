import React from "react";

import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CompleteTodoList} from "./CompleteTodoList";
import {CreateTodoButton} from "./CreateTodoButton";
import { TodoContext } from "../Context/TodoContext";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import { LoadSkeleton } from "./LoadSkeleton";
import { EmptyTodo } from "./EmptyTodo";
import { Error } from "./Error";

import todoImg from '../img/todo.svg';
import doneImg from '../img/checklist.svg';

function AppUI() {
    const {
        todoTasks,
        doTasks,
        completeTask,
        deleteTask,
        date,
        loading,
        error,
        openModal
    } = React.useContext(TodoContext)

    return(
        <React.Fragment>
        <header className="header">
            <h1> ToDo React App</h1>
        </header>
        <main>
            {error && <Error error={error} />}

            {!error && <React.Fragment>
                <TodoSearch />

                <TodoCounter />
            
                <div className='main-container'>
                <TodoList>
                    {loading && <LoadSkeleton/>}
                    {(!loading && !todoTasks.length) && <EmptyTodo img={todoImg} msg={"You don't have to-do, create a task"} />}
                    {
                    todoTasks.map( todoTask => ( //console.log(todoTask.title)
                        <TodoItem key={todoTask.id} text= {todoTask} completeTask={() => completeTask(todoTask.id)} deleteTask={() => deleteTask(todoTask.id)}/>
                    ))
                    }
                </TodoList>
                <CompleteTodoList>
                    {loading && <LoadSkeleton/>}
                    {(!loading && !doTasks.length) && <EmptyTodo img={doneImg} msg={'Complete one of your tasks'} />}
                    {
                    doTasks.map( doTask => ( //console.log(doTask.title)
                        <TodoItem key={doTask.id} text= {doTask} completeTask={() => completeTask(doTask.id)} deleteTask={() => deleteTask(doTask.id)}/>
                    ))
                    }
                </CompleteTodoList>
                </div>
                <CreateTodoButton/>
                </React.Fragment>
            }
                {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
        </main>
        <footer id="footer_main" className="footer">
            <p>@christopherdavideh • All rights reserved © {date}.</p>
            <nav>
                <ul className="footer-social">
                    <li><a href="https://www.linkedin.com/in/christopherdavideh/" target="_blank" rel="noopener" title="LinkedIn"><span className="footer-linkedin"></span></a></li>
                    <li><a href="https://github.com/christopherdavideh" target="_blank" rel="noopener" title="GitHub"><span className="footer-github"></span></a></li>
                    <li><a href="https://twitter.com/christopdavideh" target="_blank" rel="noopener" title="Twitter"><span className="footer-twitter"></span></a></li>
                    <li><a href="https://www.instagram.com/christopherdavideh/" target="_blank" rel="noopener" title="Instagram"><span className="footer-instagram"></span></a></li>
                    <li><a href="https://www.facebook.com/christopherdavideh" target="_blank" rel="noopener" title="Facebook"><span className="footer-facebook"></span></a></li>
                    <li><a href="https://christopherdavideh.com/" target="_blank" rel="noopener" title="My Web"><span className="footer-web"></span></a></li>
                </ul>
            </nav>
        </footer>
    </React.Fragment>
    );
}

export {AppUI} ;