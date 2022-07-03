import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const TodoContext = React.createContext();

function TodoProvider(props){
    let date = new Date().getFullYear().toString();
    //Estados
    const [searchValue, setSearchValue] = React.useState('');
    const {
        items: tasks, 
        savedItem: savedTask,
        loading,
        error,
        lastIdTask
    } = useLocalStorage('TASK_V1', []);

    const totalTask = tasks.length;
    let todoTasks = [];
    let doTasks = [];

    const [openModal, setOpenModal] = React.useState(false)

    if (!searchValue.length > 0) {
        todoTasks = tasks.filter(task => (!task.completed));

        doTasks = tasks.filter(task => (task.completed));

    } else {

        const searchValueLower = searchValue.toLowerCase();
        todoTasks = tasks.filter((task) => {
        const taskLower = task.title.toLowerCase();
        if (!task.completed && taskLower.includes(searchValueLower)) {
            return task
        }
        });

        doTasks = tasks.filter(task => {
        const doTaskLower = task.title.toLowerCase();
        if (task.completed && doTaskLower.includes(searchValueLower)) {
            return task
        }
        });

    }

    const completedTask = doTasks.length;
    const noCompletedTask = todoTasks.length;


    const completeTask = (id) => {
        const complete = document.getElementById(id);
        const todoIndex = tasks.findIndex( task => task.id === id);
        const newTasks = [...tasks];
        if (complete.checked) {
        newTasks[todoIndex].completed = true;
        } else {
        newTasks[todoIndex].completed = false;
        }
        savedTask(newTasks);
    }

    //Funcion para dar formato personalizado a la fecha y hora
    const formatDate = (current_datetime)=>{

        let minutes = `${current_datetime.getMinutes()}`;
        let min;
        if (minutes.length === 1) {
            min= "0"+ minutes;
        } else {
            min = minutes;
        }
        let formatted_date = current_datetime.getDate() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear() + ", " + current_datetime.getHours() + ":" + min;
        return formatted_date;
    }

    // Función para añadir un nuevo TODO
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    })
    const addTodo = async (taskInfo) => {
        const [title, description, date] = taskInfo
        if (title === "" || description === "" || date === "") {
            await Toast.fire({
                icon: 'error',
                title: 'Error! one or more empty fields'
            })
        } else {
            const newTasks = [...tasks];
            const dateFormat = formatDate(new Date(date));
            newTasks.push({
                id: lastIdTask + 1,
                title: title,
                description: description,
                date : dateFormat,
                completed : false
            });
            savedTask(newTasks);
            setOpenModal(false);
            await Toast.fire({
                icon: 'success',
                title: 'Success! The task has been saved successfully'
            })
        }
    };

    const deleteTask = (id) => {

        /*MySwal.fire({
            title: 'Sure do you want to delete the task?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            customClass: {
                actions: 'my-actions',
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            }
          }).then((result) => {
            if (result.isConfirmed) {
                const todoIndex = tasks.findIndex( task => task.id === id);
                const newTasks = [...tasks];
                newTasks.splice(todoIndex, 1);
                savedTask(newTasks);
                MySwal.fire('Deleted!', '', 'success')
            } else if (result.isDenied) {
                MySwal.fire('Changes are not saved', '', 'info')
            }
          });*/
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'colored-btn swal2-icon-success',
              cancelButton: 'colored-btn swal2-icon-error'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure to delete the task?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
            color: '#f0f0f0',
            background: '#433170 url(/images/trees.png)',
            backdrop: `
                rgba(0,0,0,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
            `,
          }).then((result) => {
            if (result.isConfirmed) {
                const todoIndex = tasks.findIndex( task => task.id === id);
                const newTasks = [...tasks];
                newTasks.splice(todoIndex, 1);
                savedTask(newTasks); 
                swalWithBootstrapButtons.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                    color: '#f0f0f0',
                    background: '#433170 url(/images/trees.png)',
                    backdrop: `
                        rgba(0,0,0,0.4)
                        url("/images/nyan-cat.gif")
                        left top
                        no-repeat
                    `
                })
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title:'Cancelled!',
                    text: 'Your task is safe',
                    icon: 'error',
                    color: '#f0f0f0',
                    background: '#433170 url(/images/trees.png)',
                    backdrop: `
                        rgba(0,0,0,0.4)
                        url("/images/nyan-cat.gif")
                        left top
                        no-repeat
                    `
                })
            }
          })
    }

    return(
        <TodoContext.Provider value={{
            searchValue,
            setSearchValue,
            totalTask,
            todoTasks,
            doTasks,
            completedTask,
            noCompletedTask,
            completeTask,
            addTodo,
            deleteTask,
            date,
            loading,
            error,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };