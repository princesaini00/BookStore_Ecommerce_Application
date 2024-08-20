import React, { useState } from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import Subscribe from "./components/Subscribe";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  const location = useLocation();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe/>} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
