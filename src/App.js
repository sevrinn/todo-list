import React, { useState } from 'react'
import './App.css';

function App() {
  //initializes state of todo with an empty string
  const[todo, setTodo] = useState("");
  //initialized state of todoList to an empty array \
  //(we store our todoObjects here eventually)
  const[todoList, setTodoList] = useState([]);

  // - - - - - - C R E A T E - - - - - - //
  // handleAddTodo is called when add todo button is clicked and it:
  //1. prevents the page from reloading
  //2. prevents empty todos from being added
  //3. creates a newTodoObj
  //4. sets todolist to include the newTodoObj and then the rest of the todoList
  //5. resets Todo to an empty string

  const handleAddTodo =(e) => {
    //1.
    e.preventDefault();
    //2.
    if(todo.length === 0){
      return;
    }
    //3.
    const newTodoObj = {
      todo: todo,
      complete: false,
    }
    //4.
    setTodoList([newTodoObj, ...todoList])
    //5.
    setTodo("")
  }

  // - - - - - - U P D A T E - - - - - - //
  //1. handleToggleComplete gets index of checkbox we clicked on
  //2. create new updatedTodoList mapping through todolist
  //3. if index kicked on matches index todoList being mapped,
    //4. creat updatedTodo using shallow copy of the rest of todo, and the opposite of what todo.complete is
    //5. return updatedTodo
  //6. return todo
  //7. setTodoList with updatedTodoList

  //1.
  const handleToggleComplete = (index) => {
    //2.
    const updatedTodoList = todoList.map((todo, idx) => {
      //3.
      if (index === idx) {
        //4.
        const updatedTodo = { ...todo, complete: !todo.complete }
        //5.
        return updatedTodo;
      }
      //6.
      return todo;
    });
    //7.
    setTodoList(updatedTodoList);
  }

  // - - - - - - D E L E T E - - - - - - //
  //called when delete button is clicked, handleRemoveTodo
  //1.filters through todoList, returning new array that includes every 
      //idx except the index we clicked on
  //2. sets todoList to equal the filtered list, 
      //effectively removing clicked on todo
    const handleRemoveTodo = (index) => {
      //1.
      const filteredTodoList = todoList.filter((_todo, idx) => idx !== index);
      //2.
      setTodoList(filteredTodoList);
    }

  return (
    <div className="App">
      <h1>Single Component Todo List</h1>
      <p>Add a todo:</p>
      {/* When fomr is submited, the anonymous callback
      takes the event and passes it to the handleAddtodo function above */}
      <form onSubmit={(e)=>handleAddTodo(e) }>
        {/* -when input changes, it takes in the event and updates todo
          to equal whats in the input box.
            -value is set equal to todo so that it clears out everytime form is submitted
           */}
        <input 
          type="text" 
          name="todo" 
          onChange={(e)=>setTodo(e.target.value)}
          value={todo}
        />
        <div>
          <button>Add Todo</button>
        </div>
      </form>

      <hr />

      
        
      
      {/* 
      // - - - - - - R E A D - - - - - - //
      when we map through the todoList in curlybraces, it prints to page immediatly
      1. map through the todoList, for each todo, index pair
      2.create empty todoClasses array
      3. if todo is complete, add cross-out (a pre styled class) to our p tag
      4. create this todo item module that includes, todo, a checkbox to mark as complete, and an button to delete
       */}
        {/* //1. */}
        {todoList.map((todo, index) => {
          //2.
          let todoClasses = [];
            //3.
            if (todo.complete) {
            todoClasses.push("cross-out");
            }
          return (
           //4.
           <div key={index}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <p className={todoClasses.join(" ")}>{todo.todo}</p>
             <input 
              type="checkbox"
              onChange={(event)=> {
                handleToggleComplete(index)
              }}
            />
            </div>
            {/* index of the corresponding todo is sent to handleRemoveTodo  */}
            <button onClick={()=>handleRemoveTodo(index)}>Remove Todo</button>
           </div>
          );
          
         })}
    </div>
  );
}

export default App;
