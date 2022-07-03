/* eslint-disable array-callback-return */
import React from "react";
//import logo from './logo.svg';
//import './App.css';
import './css/main.css';
import { TodoProvider } from "./Context/TodoContext";
import {AppUI} from './components/AppUI'

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
