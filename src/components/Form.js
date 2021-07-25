const Form = (props) => {
  const {todo, setTodo, handleAddTodo} = props
  return(
    <form onSubmit={(e) => handleAddTodo(e)}>
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
  );
}

export default Form;

// {/* <form onSubmit={(e)=>handleAddTodo(e) }>
//         {/* -when input changes, it takes in the event and updates todo
//           to equal whats in the input box.
//             -value is set equal to todo so that it clears out everytime form is submitted
//            PUT
//         <input 
//           type="text" 
//           name="todo" 
//           onChange={(e)=>setTodo(e.target.value)}
//           value={todo}
//         />
//         <div>
//           <button>Add Todo</button>
//         </div>
//       </form> */}