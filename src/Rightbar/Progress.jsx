// App.js (or any other component file)

import React from 'react';


const ProgressAndBoard = () => {
  return (
    <div className="container" style={{display:"flex", flexDirection:"column", gap:"1px"}}>
   
      

     
        <div className="column">
          
          <div className="circle" style={{ backgroundColor: 'orange' }}></div>

         
          <div className="question">
            <p>What's your goal?</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' ,  backgroundColor:"red" }}></div>
              <span style={{color:"white"}}>80</span>
            </div>
          </div>

          
          <div className="plus-sign">+</div>
        </div>

        <div className="column">
          
          <div className="circle" style={{ backgroundColor: 'green' }}></div>

         
          <div className="question">
            <p>Why you are here?</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '60%', backgroundColor:"blue" }}></div>
              <span style={{color:"white"}}>60</span>
            </div>
          </div>

          
          <div className="plus-sign">+</div>
        </div>


        <div className="column">
          
          <div className="circle" style={{ backgroundColor: 'blue' }}></div>

         
          <div className="question">
            <p>What is your age?</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
              <span style={{color:"white"}}>80</span>
            </div>
          </div>

          
          <div className="plus-sign">+</div>
        </div>


       
      </div>
   
  );
};

export default ProgressAndBoard;
