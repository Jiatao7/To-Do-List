import Task from "./Task";

export default function App() {
  return (
    <>
      <h1 className="heading">To-Do List</h1>
      <div className="container">
        <input type="text" id="task" placeholder="Enter task"/>
        <button className="addButton">Add</button>
      </div>
      <ul className = "taskList">
        <Task />
        <Task />
        <Task />
      </ul>
    </>
  )
}

