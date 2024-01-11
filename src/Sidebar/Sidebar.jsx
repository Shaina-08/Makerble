import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown , faPlus,faBell,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Event from './Event'; // Assuming your Event component is in the same directory
import './SIdebar.css'
import Contact from './Contact';
import Projects from './Projects';
import Albums from './Albums';
import Followers from './Followers';
import People from './People';
import Oragnisations from './Oragnisations';
const Sidebar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };
  const handleToggle4 = () => {
    setIsOpen4(!isOpen4);
  };
  const handleToggle5 = () => {
    setIsOpen5(!isOpen5);
  };
  const handleToggle6 = () => {
    setIsOpen6(!isOpen6);
  };
  const handleToggle7 = () => {
    setIsOpen7(!isOpen7);
  };

  return (
    <div>
      <ul className='sidebar1' style={{backgroundColor: "rgb(22, 128, 167)", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
      <li className="profile" style={{display:"flex", flexDirection:"row", gap:"4px",width:"110px"}}>
          <img src="https://placekitten.com/150/150?image=1" alt="Multicolor Logo" className="logo" />
          <span className="username">Shaina</span>
        </li>
      <li className="notification" style={{ border:"none", width:"80px",listStyle:"none"}}>
          <a href="#" style={{display:"flex", flexDirection:"row" , gap:"5px",padding:"20px", color:"white",fontSize:"21px"}}>
            <FontAwesomeIcon icon={faBell} />
            <span style={{width:"30px", height:"20px", border:"2px solid white", backgroundColor:"white",color:"blue",borderRadius:"5px"}}>5
            </span>
          </a>
        </li>
       
      <li className="message" style={{display:"flex", flexDirection:"row", gap:"4px", border:"none",width:"40px"}} >
          <a href="#" style={{ color:"white",fontSize:"21px"}}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        
        </li>
       
      </ul>
      <div className='sidebar1' onClick={handleToggle1}>
        <div className="sidebar-row">
          <span className="sidebar_heading">Events</span>
          <FontAwesomeIcon className =" icon" icon={isOpen1 ? faChevronUp : faChevronDown} />
        </div>
        {isOpen1 && <Event />}
      </div>
      <div className='sidebar1' onClick={handleToggle2}>
        <div className="sidebar-row">
        <span className="sidebar_heading">Contacts</span>
        <div className="sidebar-buttons">
            <button className="add-button" onClick={() => console.log('Add button clicked')}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <span>New Contact</span>
          </div>
          <FontAwesomeIcon className =" icon" icon={isOpen2 ? faChevronUp : faChevronDown} />
        
        </div>
        {isOpen2 && <Contact/>}
      </div>
      <div className='sidebar1' onClick={handleToggle3}>
        <div className="sidebar-row">
        <span className="sidebar_heading">Projects</span>
        <div className="sidebar-buttons">
            <button className="add-button" onClick={() => console.log('Add button clicked')}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <span>New Project</span>
          </div>
          <FontAwesomeIcon className =" icon" icon={isOpen3 ? faChevronUp : faChevronDown} />
        
        </div>
        {isOpen3 && <Projects />}
      </div>
      <div className='sidebar1' onClick={handleToggle4}>
        <div className="sidebar-row">
        <span className="sidebar_heading">Albums</span>
        <div className="sidebar-buttons">
            <button className="add-button" onClick={() => console.log('Add button clicked')}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <span>New Albums</span>
          </div>
          <FontAwesomeIcon className =" icon" icon={isOpen4 ? faChevronUp : faChevronDown} />
        
        </div>
        {isOpen4 && <Albums />}
      </div>
      <div className='sidebar1' onClick={handleToggle5}>
        <div className="sidebar-row">
          <span className="sidebar_heading">Followers</span>
          <FontAwesomeIcon className =" icon" icon={isOpen5 ? faChevronUp : faChevronDown} />
        </div>
        {isOpen5 && <Followers />}
      </div>
      <div className='sidebar1' onClick={handleToggle6}>
        <div className="sidebar-row">
          <span className="sidebar_heading">People You Know</span>
          <FontAwesomeIcon className =" icon" icon={isOpen6 ? faChevronUp : faChevronDown} />
        </div>
        {isOpen6 && <People />}
      </div>
      <div className='sidebar1' onClick={handleToggle7}>
        <div className="sidebar-row">
          <span className="sidebar_heading">Organisations</span>
          <FontAwesomeIcon className =" icon" icon={isOpen7 ? faChevronUp : faChevronDown} />
        </div>
        {isOpen7 && <Oragnisations />}
      </div>
    </div>
  );
};

export default Sidebar;
