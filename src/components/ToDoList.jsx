import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'

const ToDoList = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');

  // const handleAddList = () => {
  //   if(!todo.includes(text)) {
  //     setTodo([...todo, text])
  //   }
  //   setText("")
  // }

  const handleAddList = () => {
    setTodo([...todo, text])
    setText("")
  }
  

  function deleteTodo(items) {
    setTodo(todo.filter((j) => j != items));
  }

  return (
    <div className='todo-container'>
      <input className='todo-input' 
      type='text' placeholder='Add Your List' value={text}
      onChange={(e) => setText(e.target.value)}
      />

      <button className='todo-btn' onClick={handleAddList}>Add On</button>

      <ul className='todo-list'>
        {
          todo.map((items) => (<li>{items} <button onClick={() => deleteTodo(items)} className='todo-del'><AiFillDelete /></button></li>))
        }
      </ul>
    </div>
  )
}

export default ToDoList