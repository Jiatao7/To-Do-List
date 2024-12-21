import React from "react"
import Task from "./Task";

export default function App() { 
  
  const [tasks, setTasks] = React.useState([])


  function addTask(formData) {
    const newTask = formData.get("task")
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  //Create task elements
  const taskElements = tasks.map((task, index) => <Task key={index} task={task} />)

  return (
    <>
      <h1 className="heading">To-Do List</h1>      
      <form action={addTask} className="container">
        <input id="task" type="text" name="task" placeholder="Enter task"/>
        <button className="addButton">Add</button>
      </form>

      <ul className = "taskList">
        {taskElements}
      </ul>
    </>
  )
}
