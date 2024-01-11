// TodoForm.js (or any other component file)

import React from 'react';
import './Rightbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
const TodoForm = () => {
  return (
    <div className="todo-container">
      {/* Add Todo Form */}
      <div className="add-todo" style={{display:"flex", flexDirection:"row", gap:"5px"}}>
        <input type="text" placeholder="Add your next to-do task" />
        <button className="save-button">Save Task</button>
        
      </div>

      {/* Options for Todo Tasks */}
      <div className="todo-options">
        <label style={{border:"1px solid black", display:"flex" , justifyContent:"space-between", padding:"10px"}}>
         Follow up call needed
         <input type="checkbox" /> 
        </label>
        <label  style={{border:"1px solid black", display:"flex" , justifyContent:"space-between", padding:"10px"}}>
        Contact the local auth <input type="checkbox" /> 
        </label>
        <label style={{border:"1px solid black", display:"flex" , justifyContent:"space-between", padding:"10px"}} >
        Book in the another meeting <input type="checkbox" /> 
        </label>
        {/* Add more options as needed */}
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="previous-button">Previous</button>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default TodoForm;
