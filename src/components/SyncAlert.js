import React from "react";
import { withStorageListener } from "../hooks/withStorageListener";

function SyncAlert({storageChange, showAlert}){

    

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

const SyncAlertWithStorageListener = withStorageListener(SyncAlert);

export {SyncAlertWithStorageListener};