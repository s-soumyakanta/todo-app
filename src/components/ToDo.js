import {React,useState} from "react";
import "./fontawsm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css"


export default function ToDo(){

const [inputData,setInputData] = useState("")
const [todoList,setTodoList] = useState([])
const [isDone, setIsDone] = useState("false")


const  addItem = () =>{
   if(!inputData){
      
   }else{
   setTodoList([...todoList,inputData])
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
const handleDone = ()=>{
   setIsDone(!isDone)
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
    <div className={isDone?"todo-name ":"todo-name taskDone"}>{elem}</div>

    <div className="todo-action">
    <div className="delete"><FontAwesomeIcon icon="fa-solid fa-trash-can" className="btn delete" onClick={()=>deleteTodo(ind)} />
    </div>
    <div className="checkbox"><FontAwesomeIcon icon={isDone ? "fa-solid fa-check":"fa-solid fa-check-double"} className={isDone  ?"btn":"btn done"} onClick={handleDone}/></div>

     </div>
    
   </div>
      
      )}

   )}
      
</div>


)
}