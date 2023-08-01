import './App.css';
import React, { useState } from 'react';

import Header from './MyComponent/Header';
import AddTodo from './MyComponent/AddTodo';
import {Todos} from './MyComponent/Todos';
import Footer from './MyComponent/Footer'
import About from './MyComponent/About'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




// Main function

function App() {

  const[todos,setTodos]=useState([]);   // use state hooks in todos as to take new input as value.

  // This function deletes the todo which is used in todoitem file actived on clicking the button.
  const onDelete= (todo)=>{
    
    // Deleting this way in react does'nt work.
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);    //here 1 is the count value for splicing and index the base value.
    
    console.log("I am onDelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));


  
  } 
  
  // This function takes the input value and update the todos array of object which is called and displayed in todoitem file with todos file  acting as intermediatary.
  const addTodo = (title,desc)=>{
    // console.log("Adding Works", title, desc) 

    let sno
    
    if(todos.length===0){   
      sno=1;
    }

    else{
       sno =todos[todos.length-1].sno + 1;

    }
    
    // This takes the individual todo value takes from add todo that we add on todos.
    const myTodo ={
      
      sno: sno,
      title:title,
      desc:desc

    }

    setTodos([...todos, myTodo])
    console.log(myTodo);

  }
    



 
  
  
 
  return (
    <>
    <Header title="My Todos List" searchBar={true}/>
    
    <Routes>
      
      <Route path="/about" element={<About />} />
      <Route path='/' element={[<AddTodo addTodo={addTodo} />,<Todos todos={todos} onDelete={onDelete}/>]} />
     
    </Routes>
    
      
    <Footer/>
    
    
    </>
  );
}

export default App;
