const Todo = (props) => {
  const {todo, handleToggleComplete, index, handleRemoveTodo} = props;
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
         handleToggleComplete(todo, index)
        
       }}
       checked = {todo.complete ? true : false}
     />
     </div>
     {/* index of the corresponding todo is sent to handleRemoveTodo  */}
     <button onClick={()=>handleRemoveTodo(index)}>Remove Todo</button>
     <hr />
    </div>
    
   );
}

export default Todo;