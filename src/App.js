import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <a>ToDo List</a>
        <TaskWrapper data={data} />
        <input type="text" onChange={(event) => setInputText(event.target.value)}></input>
        <button onClick={() => setData(AddTask(data, inputText))}>Add</button>
      </header>
    </div>
  );
}

function AddTask(arr, text) {
  let count;
  if (arr.length === 0) {
    count = 0;
  } else {
    count = arr[arr.length - 1].id + 1;
  }
  let newTask = {
    id: count,
    value: text,
    type: "active",
  };
  arr.push(newTask);
  return arr;
}

function TaskWrapper(props) {
  const activeTasks = props.data.filter((el) => el.type === "active");
  const completedTasks = props.data.filter((el) => el.type === "completed");
  return (
    <div className="TaskWrapper">
      <TaskColumn name="Active" taskList={activeTasks} />
      <TaskColumn name="Completed" taskList={completedTasks} />
    </div>
  );
}

function TaskColumn(props) {
  const taskList = props.taskList;

  return (
    <div className="TaskColumn">
      <h1>{props.name}</h1>
      {taskList.map((el) => (
        <Task text={el.text} />
      ))}
    </div>
  );
}

function Task(props) {
  return (
    <div className="Task">
      <input type="checkbox"></input>
      <p>{props.text}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default App;
export { TaskWrapper };
