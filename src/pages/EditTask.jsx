import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateTask } from "../lib/pocketbase";
export default function EditTask() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = () => {
    if (!title) {
      window.alert("Please enter a title");
      return;
    }
    updateTask(id, title, description);
    navigate("..");
  };
  return (
    <>
      <h2>Edit Task</h2>
      <div className="grid gap-6 mt-4 text-base">
        <input
          className="text-input "
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="text-input"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
        />
      </div>

      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md text-base mt-6 hover:bg-green-600"
        onClick={handleSubmit}
      >
        <div className="flex">
          <span className="material-symbols-outlined -ml-2">save</span>
          <p className="text-base ml-2">Save</p>
        </div>
      </button>
    </>
  );
}
