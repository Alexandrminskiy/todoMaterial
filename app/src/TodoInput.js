const TodoInput = ({todo, setTodo, addTodo}) => {
    return (
    <div className='input-wrapper'>
    <input
      type='text'
      name='todo'
      placeholder='Creae new todo'
      value={todo}
      onChange={(e) => {
        setTodo(e.target.value)
      }} />
    <button className='add-Button' onClick={addTodo}>Add</button>
    </div>
    )
}

export default TodoInput