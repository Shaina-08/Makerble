import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { faCog } from '@fortawesome/free-solid-svg-icons';
import './Rightbar.css'
import Projects from '../Sidebar/Projects';
import ProgressAndBoard from './Progress';
import TodoForm from './TodoForm';

const Rightbar = () => {
  return (
    <>
    <div style={{display:"flex", flexDirection:"column"}}>

   
   
   <div className='sidebar1' style={{height:"200px"}} >
        <div className="sidebar-row" >
        <span className="sidebar_heading">Boards</span>
        <div className="sidebar-buttons">
            <button className="add-button" onClick={() => console.log('Add button clicked')}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <span>New Board</span>
          </div>
         
        
        </div>
         <Projects />
      </div>
      <div className='sidebar1' style={{height:"300px"}} >
        <div className="sidebar-row" >
        <span className="sidebar_heading">Personal Progress</span>
        <div className="sidebar-buttons">
        
            <span>Go to  Board</span>
          </div>
         
        
        </div>
         <ProgressAndBoard />
      </div>
      <div className='sidebar1' style={{height:"500px"}} >
        <div className="sidebar-row" >
        <span className="sidebar_heading">Tasks</span>
        <div className="sidebar-buttons">
        
            <span>Filters</span>
          </div>
         
        
        </div>
            
         <TodoForm/>
      </div>
      </div>
    </>
  )
}

export default Rightbar