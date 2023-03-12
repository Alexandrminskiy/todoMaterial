import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const addTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo])
      setTodo('')
    }
  }
  console.log(todos);

  return (
    <div className="App">
      <h1>React Todo App</h1>

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

        <ul className='todo-list'>
          {todos.map((todo, index) => (
          <div className='todo'>
            <li key={index}>{todo}</li>

            <button className='delete-button'>Delete</button>
          </div> 
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;
