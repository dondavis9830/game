import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate(); 
  const [userId, setUserId] = useState(""); 
  const [password, setPassword] = useState(""); 
  const login = (e) => { e.preventDefault(); 
    const users = JSON.parse(localStorage.getItem("users")) || []; 
    const user = users.find( (item) => item.userId === userId && item.password === password ); 
    if (!user) { 
      alert("Invalid User ID or Password"); 
      return;
    }
    // Store currently logged-in user
     localStorage.setItem( "loggedUser",JSON.stringify({ userId: user.userId, name: user.name, gmail: user.gmail, }) ); 
     localStorage.setItem("currentuser",JSON.stringify(user.userId))
     alert("Login successful!"); 
     navigate("/game-zone");
  }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4"> 
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8"> 
          <h1 className="text-3xl font-bold text-center text-purple-600"> Welcome Back </h1> 
          <p className="text-center text-gray-500 mt-2 mb-6"> Login to Game Zone </p> 
          <form onSubmit={login} className="space-y-4"> 
            <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} 
                   className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" /> 
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} 
                   className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" /> 
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold text-lg" > Login </button> 
            </form> 
            <p className="text-center mt-5 text-gray-600"> Don't have an account? 
            <button onClick={() => navigate("/register")} className="ml-2 text-purple-600 font-semibold" > Register </button> 
            </p> 
        </div> 
      </div>
    </div>
  )
}
