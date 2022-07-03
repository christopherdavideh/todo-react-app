import React from "react";
import Swal from 'sweetalert2';
import errorImg from '../img/error.svg';

function Error (props) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true
    })
    Toast.fire({
        icon: 'error',
        title: `Error! ${props.error}`
    });

    return(
        <img className="error-img" src={errorImg} alt="Error 500 - Internal Server" width={550} height={550}/>
    );

}

export {Error};