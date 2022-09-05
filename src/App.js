import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const localtodos = localStorage.getItem('todos')
    if(localtodos){
      setTodos(JSON.parse(localtodos))
    }
  },[])

  const addTodo = todo => {
    setTodos(...todos, todo)
  }

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const markComplete = id => {
    setTodos(todos.filter(todo=>todo.id !== id))
  }

  return (
      <Container fluid>
        <h1>Todo App with Context API</h1>
        <Todos todos={todos} markComplete={markComplete} />
        <TodoForm addTodo={addTodo} />
      </Container>
  );
};

export default App;
