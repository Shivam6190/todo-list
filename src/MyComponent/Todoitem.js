import React from 'react'

// This display the todo-items.
export const Todoitem = ({todo,onDelete}) => {
  return (
    <>
    
    <div className="my-1">
      
      
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      
      <button className='btn btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
      
      
      
    </div>

    <hr/>
    
    </>
  )
}


