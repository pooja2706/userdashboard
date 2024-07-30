// import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {lazy} from 'react';
// import Dashboard from "./pages/dashboard"
// import UserProfile from "./pages/userinformation/userProfile"

const Dashboard = lazy(()=>import ("./pages/dashboard"));
const UserProfile = lazy(()=>import ("./pages/userinformation/userProfile"));
const UserActivities = lazy(()=>import ("./pages/userinformation/userActivities"));
const PageNotFound = lazy(()=>import ("./component/pagenotfound"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Dashboard/>}/>
        <Route path="/user/:userid"element={<UserProfile/>}/>
        <Route path="/posts/:userid"element={<UserActivities/>}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  )
}

export default App
