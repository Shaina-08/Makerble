import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';
import './App.css'
import Rightbar from './Rightbar/Rightbar';
import Feed from './components/Feed';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(true); // Toggle the isOpen state value
  };

  return (
    <>
    <div className="app">

   

      <Navbar />
   
     
      <div className="sections" style={{display:"flex", justifyContent:"space-between"}}>

       <Sidebar />
       <Feed/>
      <Rightbar/>
      </div>

      
      </div>
    </>
  );
}

export default App;
