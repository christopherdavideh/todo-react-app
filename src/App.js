import React from "react";
import './css/main.css';

//import { TodoProvider } from "./Context/TodoContext";
import { TodoMain } from "./components/TodoMain";
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {TodoList} from "./components/TodoList";
import {TodoItem} from "./components/TodoItem";
import {CompleteTodoList} from "./components/CompleteTodoList";
import {CreateTodoButton} from "./components/CreateTodoButton";
import { useTodo } from "./hooks/useTodo";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";
import { LoadSkeleton } from "./components/LoadSkeleton";
import { EmptyTodo } from "./components/EmptyTodo";
import { Error } from "./components/Error";

import todoImg from './img/todo.svg';
import doneImg from './img/checklist.svg';

function App() {
    const {
        todoTasks,
        doTasks,
        totalTask,
        totalSearch,
        completeTask,
        noCompletedTask,
        completedTask,
        deleteTask,
        date,
        loading,
        error,
        openModal,
        setOpenModal,
        searchValue,
        setSearchValue,
        addTodo,
    } = useTodo();
    return (
        <React.Fragment>
            <header className="header">
                <h1> ToDo React App</h1>
            </header>
            <TodoMain error = {error} >
            {(errorLoad) => {
                    if (!!errorLoad) {
                        return (<Error error = {errorLoad} />);

                    } else if (!errorLoad) {
                        return (
                            <React.Fragment>
                                <TodoSearch searchValue = {searchValue} setSearchValue = {setSearchValue} />

                                <TodoCounter searchValue = {searchValue} totalTask = {totalTask} completedTask = {completedTask}/>

                                <div className='main-container'>
                                    <TodoList 
                                        noCompletedTask = {noCompletedTask}
                                        loading = {loading}
                                        todoTasks = {todoTasks}
                                        totalTask = {searchValue}
                                        totalSearch = {totalSearch}
                                        onLoading = {() => <LoadSkeleton />}
                                        onEmpty = {(msg) => <EmptyTodo img={todoImg} msg={msg} />}
                                        render = { (todo) =>  //console.log(todo.title)
                                            <TodoItem key={todo.id} text= {todo} completeTask={() => completeTask(todo.id)} deleteTask={() => deleteTask(todo.id)}/>

                                        }
                                    >
                                        {/*loading && <LoadSkeleton/>}
                                        {(!loading && !todoTasks.length) && <EmptyTodo img={todoImg} msg={"You don't have to-do, create a task"} />}
                                        {
                                        todoTasks.map( todoTask => ( //console.log(todoTask.title)
                                            <TodoItem key={todoTask.id} text= {todoTask} completeTask={() => completeTask(todoTask.id)} deleteTask={() => deleteTask(todoTask.id)}/>
                                        ))
                                        */}
                                    </TodoList>
                                    <TodoList 
                                        completedTask={completedTask}
                                        loading = {loading}
                                        doTasks = {doTasks}
                                        totalTask = {searchValue}
                                        totalSearch = {totalSearch}
                                        onLoading = {() => <LoadSkeleton />}
                                        onEmpty = {(msg) => <EmptyTodo img={doneImg} msg={msg} />}
                                        render = { (todo) =>  //console.log(todo.title)
                                            <TodoItem key={todo.id} text= {todo} completeTask={() => completeTask(todo.id)} deleteTask={() => deleteTask(todo.id)}/>

                                        }
                                    />
                                    {/*<CompleteTodoList completedTask={completedTask}>
                                        {loading && <LoadSkeleton/>}
                                        {(!loading && !doTasks.length) && <EmptyTodo img={doneImg} msg={'Complete one of your tasks'} />}
                                        {
                                        doTasks.map( doTask => ( //console.log(doTask.title)
                                            <TodoItem key={doTask.id} text= {doTask} completeTask={() => completeTask(doTask.id)} deleteTask={() => deleteTask(doTask.id)}/>
                                        ))
                                        }
                                    </CompleteTodoList>*/}
                                </div>
                                <CreateTodoButton setOpenModal= {setOpenModal} />
                            </React.Fragment>
                        );
                    }
                }}
            </TodoMain>

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

            {!!openModal && (
                <Modal>
                    <TodoForm addTodo = {addTodo} setOpenModal = {setOpenModal} />
                </Modal>
            )}
        </React.Fragment>
    );
}

export default App;
