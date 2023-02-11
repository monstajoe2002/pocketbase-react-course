import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTasks, deleteTask, toggleTask } from "../lib/pocketbase";
export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getTasks().then((res) => {
      setTasks(res);
      setLoading(false);
    });
  }, []);
  
  return (
    <>
      {loading? (
        <h1 className="mb-4">Loading...</h1>
      ) : (
        tasks.map((task) => (
          <div key={task.id}>
            <div className="flex">
              <input
                className="h-6 w-6 my-auto"
                type="checkbox"
                name="completed"
                defaultChecked={task.completed}
                onChange={() => {
                  setCompleted(!completed);
                  toggleTask(task.id, task.title, completed);
                }}
              />
              <h4 className="text-2xl ml-4 ">{task.title}</h4>
              <div className="ml-auto">
                <Link to={`edit/${task.id}`}>
                  <button className="ml-4 bg-gray-500 rounded-md text-white px-2 hover:bg-gray-600">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </Link>
                <button
                  className="ml-4 bg-red-500 rounded-md text-white px-2 hover:bg-red-600"
                  onClick={() => deleteTask(task.id)}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
            <p className="text-xl text-gray-400 my-2">{task.description}</p>
            <hr className="border border-gray-400 my-4" />
          </div>
        ))
      )}
      <Link to="create">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md text-base hover:bg-green-600">
          <div className="flex my-auto">
            <span className="material-symbols-outlined -ml-2">add</span>
            <p className="ml-2">New Task</p>
          </div>
        </button>
      </Link>
    </>
  );
}
