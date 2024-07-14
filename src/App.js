
import './App.css';
import React, { useState } from 'react';


function App() {
  const [todoList,setTodoList]=useState([{}]);
  const [newTask,setNewTask]=useState("");
  const handleChange=(event)=>{
      setNewTask(event.target.value);
  }
  const setTask=()=>{
    
    if(todoList.length==0){
      const newtodoList=[{id:1,TASK:newTask,status:false}]
      setTodoList(newtodoList);
    }else{
    const newtodoList=[...todoList,{id:todoList.length+1,TASK:newTask,status:false}];
    setTodoList(newtodoList);
    }
    
  }
  const deleteTask=(task)=>{
     const newtodolist=todoList.filter((val)=>{
       return (val.id===task?false:true);
     })
     setTodoList(newtodolist);
  }
  const completeTask=(Id)=>{
    const newList=todoList.map((val)=>{
      if(val.id===Id){
         return {...val,status:true}
      }
      else{
        return val;
      }
    })
    setTodoList(newList);
  }
  return (
    <div className="App"> 
     <div className="addTask">
      <input onChange={handleChange}/>
      <button onClick={setTask}>add task</button>
     </div>
     <div className="list">
      {todoList.map((task)=>{
        return (
        <div style={{backgroundColor:task.status?"green":"white"}}>
          <h1> {task.TASK}</h1>
          <button onClick={()=>completeTask(task.id) }>completed</button>
          <button className="statusbtn" onClick={()=>deleteTask(task.id) }>X</button>
        </div>
        )
      })}
     </div>
     
    </div>
  );
}

export default App;
