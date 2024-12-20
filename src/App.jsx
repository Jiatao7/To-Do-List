import Task from "./Task";

export default function App() {
  return (
    <>
      <h1 className="heading">To-Do List</h1>
      <input type="text" id="task" placeholder="Enter task"/>
      <button className="addTask">Add</button>
      <ul className = "taskList">
        <Task />
        <Task />
        <Task />
      </ul>
    </>
  )
}

