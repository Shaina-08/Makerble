import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faBars,faPlus } from '@fortawesome/free-solid-svg-icons'; // Import the required Font Awesome icons
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li style={{width: "120px"}} ><img src="/maker.png" className='img_nav'   alt="" /></li>
        <li><a href="#">My Apps</a></li>
        <li><a href="#" >Home</a></li>
        <li><a href="#">Explore</a></li>
       
        <li><input type="text" placeholder="Search for contacts and projects" className="search-bar"  /></li>
       
      
    
        <li style={{border:"none", marginLeft:"240px"}}>
       
          <button className="create-btn"
          
           style={{backgroundColor:"#e74c3c", marginTop:"16px", borderRadius:"20px", width:"90px",marginleft:"70px"} }>
             <button className="add-button" onClick={() => console.log('Add button clicked')}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            
            Create</button>

        </li>
        <li className="more" style={{display:"flex",width:"40px" }}>
          <a href="#" style={{border:"1px solid black", padding:"10px", borderRadius:"20px", marginright:"80px",marginleft:"70px"} }>
            <FontAwesomeIcon icon={faBars} />
          <div className="more-options">
            More
          </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
