import React from "react";

function useStorageListener(syncItem){
    const [storageChange, setStorageChange] = React.useState(false);
    React.useEffect(() => {
        const onChange = (change) => {
            if (change.key === "TASK_V1") {
                //console.log("Hubo cambios en TODOS_V1");
                setStorageChange(true);
            }
        };

        window.addEventListener("storage", onChange);

        return () => {
        window.removeEventListener("storage", onChange);
        };
    }, []);

    const showAlert = () => {
        setStorageChange(false);
        syncItem()
    }
    return {
        storageChange,
        showAlert
    }
    
}

export {useStorageListener}