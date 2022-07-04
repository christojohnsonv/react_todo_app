import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, add your tasks... 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{setToDos([...toDos,{id:Date.now(),text:toDo,status:false}]); setToDo('');}} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDos.map((obj,index)=>{
          return(
          <div key={obj.id} className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                  console.log(obj)
                }
                return obj2.id
              }))
            }} type="checkbox" name="" value={obj.status} id="" />
            <p>{obj.text}</p>
            </div>
            <div className="right">
              
            {/* <i className="fas fa-times" ind={index} onClick={remove_task}></i> */}

              <i className="fas fa-times" onClick={()=>{
                let new_array = toDos.filter(delObj=>{
                  if(delObj.id!==obj.id){
                    console.log("object id: ",obj.id,"delete object: ",delObj.id)
                    console.log(delObj)
                    return true
                  }
                  return false
                })
                setToDos([...new_array])
              }}></i>
            </div>
          </div>
        )  
      }) }
      {
        toDos.map((disObj)=>{
            if(disObj.status===true){
              return (<h1 key={disObj.id}>{disObj.text}</h1>)
            }
            return null
        })
      }
      </div>
    </div>
  );
}

export default App;