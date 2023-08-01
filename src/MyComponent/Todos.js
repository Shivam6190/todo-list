import React from 'react'
import {Todoitem} from "./Todoitem";

export const Todos = (props) => {

  let bodystyle={
    minHeight:"55vh",
    margin:"10px auto"

      
  }
  
  
  
  
  return (
    
   
    
    <div className="container"  style={bodystyle}>
      
      <h3 className='my-3'>Todos List</h3>

      {/* Here todos is takes as a prop and is passed to todoitem file  */}
      
      {props.todos.length===0? "No Todos to display": 
      //map function is taking out objects individually in the todo keyword which is used in todoitem file.
      props.todos.map((todo)=>{
          return(<Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>) 
      })
      }
    </div>
  )
}


