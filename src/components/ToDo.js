import {React,useState,useEffect} from "react";
import "./fontawsm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css"


export default function ToDo(){

const [inputData,setInputData] = useState("")
const [todoList,setTodoList] = useState(JSON.parse(localStorage.getItem("todo")) || [])


useEffect(()=>{
   localStorage.setItem("todo",JSON.stringify(todoList))
},[todoList])

const  addItem = () =>{
   if(!inputData){
      
   }else{
   setTodoList([...todoList,{data:inputData,isDone:false}])
   
   setInputData("")
   }
}


const deleteTodo = (id)=>{
   
     const deleteOneToDo = todoList.filter((elem,ind) =>{
      return(
         ind !==id
      )
     })
     setTodoList(deleteOneToDo)
}


const handelDone = (id)=>{ 
   const newTodo = []
   const doneTodo = todoList.map((currentTodo,ind)=>{
      const doneStatus = currentTodo.isDone
      if(ind === id){
         const updatedTodo = {
            ...currentTodo,isDone:!doneStatus
            
         }
         newTodo.push(updatedTodo)
      }else{
         newTodo.push(currentTodo)
      }
      return newTodo
   })
   setTodoList(newTodo)
   console.log(doneTodo)
   console.clear()
}




return(


<div className="container">
   <div className="heading">To Do List</div>
<div className="enter-task">
    <form>

    <input  type="text" placeholder="Add a task..." value={inputData} onChange={(e) => setInputData(e.target.value)}></input>
    </form>
    <div><FontAwesomeIcon icon="fa-solid fa-circle-plus fa-xl" className="btn plus" onClick={addItem}/></div>
   </div>

   {todoList.map( (elem,ind)=>{
    return(
      <div className="todo"key={ind}>
    <div className={elem.isDone?"todo-name taskDone": "todo-name "}>{elem.data}</div>
    <div className="todo-action">
    <div className="delete"><FontAwesomeIcon icon="fa-solid fa-trash-can" className="btn delete" onClick={()=>deleteTodo(ind)} />
    </div>
    <div className="checkbox"><FontAwesomeIcon icon={elem.isDone ? "fa-solid fa-check-double":"fa-solid fa-check"} className={elem.isDone  ?"btn done":"btn"} onClick={()=>handelDone(ind)}/></div>

     </div>
    
   </div>
      
      )}

   )}
      
</div>


)
}