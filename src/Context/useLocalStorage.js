import React from 'react';
/*let tasksDefault = [
  {
      id: 1,
      title: "Progrmacion con Python",
      description: "Tomar el Curso de Programacion con Python",
      date : "03/06/2022, 10:00",
      completed : false
  },
  {
      id: 2,
      title: "Progrmacion con C#",
      description: "Tomar el Curso de Programacion con C#",
      date : "04/06/2022, 10:00",
      completed : false
  },
  {
      id: 3,
      title: "Progrmacion con Java",
      description: "Tomar el Curso de Programacion con Java",
      date : "05/06/2022, 10:00",
      completed : false
  },
  {
      id: 4,
      title: "Curso Java SE",
      description: "Tomar el Curso de Programacion con Java",
      date : "05/06/2022, 10:00",
      completed : true
  },
  {
      id: 5,
      title: "Progrmacion con PHP",
      description: "Tomar el Curso de Programacion con PHP",
      date : "06/06/2022, 10:00",
      completed : true
  },

];*/

/*  Custom React Hook  */

function useLocalStorage(itemName, initialValue){
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [items, setItem] = React.useState(initialValue);
  const [lastIdTask, setLastId] = React.useState(0);
  React.useEffect(()=>{
    setTimeout(() => {
      try {
        let itemParsed;
        if (localStorage.getItem(itemName)) {
          itemParsed = JSON.parse(localStorage.getItem(itemName));
          if(JSON.stringify(itemParsed) === '[]'){
            setLastId(0);
          } else {
            //last id
            setLastId(itemParsed[itemParsed.length-1].id)
          }
          
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          itemParsed = initialValue;
        }
        setItem(itemParsed);
        setLoading(false);

      } catch (error) {
        setError(error);
      }

    }, 2000);
  }, []);


  const savedItem = (newListItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newListItem));
      setItem(newListItem);
      setLastId(newListItem[newListItem.length-1].id);

    } catch (error) {
      setError(error)
    }
  }

  return{
    items,
    savedItem,
    loading,
    error,
    lastIdTask
  };

}

export { useLocalStorage }