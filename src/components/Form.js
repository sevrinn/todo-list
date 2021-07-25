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

