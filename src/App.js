import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveTodo } from './features/todoSlice'

function App() {

  const [input, setInput] = useState("");

  const todoList = useSelector((state) => state.todos.todoList)

  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now()
    }))
    setInput("")
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      {todoList.map((todo, index) => <p key={index}>Hi {todo.item} </p>)}
      <h1>Add new Todo</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <input type="button" onClick={addTodo} value="Add" />
    </div>
  );
}

export default App;
