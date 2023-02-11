import React,{useState} from 'react'
import { signup } from '../lib/pocketbase';

export default function Signup() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = () => {
    if (!username || !password) {
      window.alert("Invalid Login credentials");
      return;
    }
    signup(username, password);
  };
  return (
    <>
      <h2>Create A New Account</h2>
      <div className="grid gap-6 mt-4 text-base">
        <input
          className="text-input "
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="text-input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </div>

      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md text-base mt-6 hover:bg-green-600"
        onClick={handleSubmit}
      >
        <div className="flex">
          <span className="material-symbols-outlined -ml-2">login</span>
          <p className="text-base ml-2">Continue</p>
        </div>
      </button>
    </>
  );
}
