import Task from "./Task";

export default function App() {
  return (
    <>
      <h1> Hello There </h1>
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

