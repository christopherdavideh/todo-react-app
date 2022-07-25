import React from "react";
import { useStorageListener } from "../hooks/useStorageListener";

function SyncAlert({syncItem}){
    const { 
        storageChange,
        showAlert
    } = useStorageListener(syncItem);
    return(
        storageChange && (
            <div className="sync-alert">
                <div className="sync-alert-container ">
                    <p>It has been detected that there are changes in your tasks, please sync the data now !</p>
                    <button className="TodoForm-button TodoForm-button--add" onClick={showAlert}>Sync</button>
                </div>
            </div>
        )
    )
}


export {SyncAlert};