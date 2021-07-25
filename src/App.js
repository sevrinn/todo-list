import React, { useState } from 'react'
import './App.css';

function App() {
  //initializes state of todo with an empty string
  const[todo, setTodo] = useState("");
  //initialized state of todoList to an empty array \
  //(we store our todoObjects here eventually)
  const[todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h1>Single Component Todo List</h1>
      <p>Add a todo:</p>
      <form>
        {/* when input changes, it takes in the event and updates todo
          to equal whats in the input box */}
        <input 
          type="text" 
          name="todo" 
          onChange={(e)=>setTodo(e.target.value)}
        />
        <div>
          <button>Add Todo</button>
        </div>
      </form>
    </div>
  );
}

export default App;
