import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

  const navigate = useNavigate(); 
  const [name, setName] = useState(""); 
  const [userId, setUserId] = useState(""); 
  const [gmail, setGmail] = useState(""); 
  const [password1, setPassword1] = useState(""); 
  const [password2, setPassword2] = useState(""); 
  const register = (e) => { e.preventDefault();

  // Validation 

  if (!name || !userId || !gmail || !password1 || !password2) { 
    alert("Please fill all fields"); return; 
  } if (name.length < 3) { 
    alert("Name must contain at least 3 characters"); 
    return; 
  } if (userId.length < 4) { 
    alert("User ID must contain at least 4 characters"); 
    return; 
  } if (!gmail.endsWith("@gmail.com")) { 
    alert("Please enter a valid Gmail address"); 
    return; 
  } if (password1.length < 3) { 
    alert("Password must contain at least 6 characters"); 
    return; } 
    if (password1 !== password2) { 
      alert("Passwords do not match"); 
      return; 
    } 

  // Get existing users
   const users = JSON.parse(localStorage.getItem("users")) || []; 

  // Check duplicate User ID
    const existingUserId = users.find( (user) => user.userId === userId ); 
    if (existingUserId) { 
      alert("User ID already exists"); 
      return; 
    } 

    // Check duplicate Gmail
     const existingGmail = users.find( (user) => user.gmail === gmail ); 
     if (existingGmail) { 
      alert("Gmail already registered"); 
      return; 
    }

    // Create user
       const newUser = { name, userId, gmail, password: password1, };

    // Save user 
        users.push(newUser); 
        localStorage.setItem("users", JSON.stringify(users)); 
        alert("Registration successful!");

    // Go to login
          navigate("/login"); 
        };
  const handleScreenClick = () => {
    // Send a custom event to BgMusic
    window.dispatchEvent(new Event("startMusic"));
  };

  return (
    <div onClick={handleScreenClick}
      className="w-full h-screen relative cursor-pointer">
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4"> 
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8"> 
          <h1 className="text-3xl font-bold text-center text-purple-600"> Create Account </h1> 
          <p className="text-center text-gray-500 mt-2 mb-6"> Join the Game Zone </p> 
          <form onSubmit={register} className="space-y-4">
            {/* Name */} 
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} 
                     className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" /> 
            {/* User ID */} 
              <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} 
                     className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" />
            {/* Gmail */} 
              <input type="email" placeholder="Gmail" value={gmail} onChange={(e) => setGmail(e.target.value)} 
                     className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" /> 
            {/* Password */} 
              <input type="password" placeholder="Password" value={password1} onChange={(e) => setPassword1(e.target.value)} 
                     className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" />
            {/* Confirm Password */} 
              <input type="password" placeholder="Confirm Password" value={password2} onChange={(e) => setPassword2(e.target.value)} 
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" /> 
              
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold text-lg transition duration-300" > Register </button> 
            </form> 
            <p className="text-center mt-5 text-gray-600"> Already have an account? 
              <button onClick={() => navigate("/login")} className="ml-2 text-purple-600 font-semibold" > Login </button> 
            </p> 
        </div>
      </div>
    </div>
  )
}
