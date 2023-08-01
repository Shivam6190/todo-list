import React, { useState } from 'react';



// this AddTodo function is taking input on submission in addTodo function declared on App.js file

const AddTodo = (props) => {

  const [title,setTitle]=useState("");  //using state hook as value needs to be updated.
  const [desc,setDesc]=useState("");

    const onSubmit=(e)=>{

      e.preventDefault();

        if(!title || !desc){
          alert("Title or description can't be empty")
        }

        else{
          props.addTodo(title,desc);
          setTitle("");
          setDesc("");
        }
        
    }
      

  return (

      <div className='container my-3'>
          <h3>Add a Todo</h3>
          <h3></h3>
            
            <form onSubmit={onSubmit}>

                            
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    {/* Here setTitle is used for taking new value */}
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  className="form-control" id="title" aria-describedby="emailHelp"/>  
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                
                <button type="submit" className="btn btn-sm btn-success me-3">Add Todo</button>
                
                
                
                
                
            
            </form>


      </div>
      

            
  )
}

export default AddTodo
