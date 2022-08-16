import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';


const App = () => {
  
  const [currentStorage, setCurrentStorage] = useState([]);

  useEffect(() => {
    setCurrentStorage(localStorage.getItem('email'))
  }, [currentStorage])

  return (
    <Routes>
      <Route path="/" element={<Login currentStorage={currentStorage} />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/home" element={<Home currentStorage={currentStorage} />} >
      {/* <Route index element={<Signup />} /> */}
      </Route>
    </Routes>
  )
}

export default App
  