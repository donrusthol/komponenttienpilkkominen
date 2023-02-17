import React, { useState } from "react";
import './App.css';
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
