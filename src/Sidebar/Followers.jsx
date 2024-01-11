import React from 'react'

const Followers = () => {
  return (
   
        <div className="photo-gallery">
          <div className="row">
            {/* First Row with 5 Circles */}
            <div className="circle-container">
              <img
                src="https://placekitten.com/150/150?image=1"
                alt="Image 1"
                className="circle-image"
              />
            </div>
            <div className="circle-container">
              <img
                src="https://placekitten.com/150/150?image=2"
                alt="Image 2"
                className="circle-image"
              />
            </div>
            <div className="circle-container">
              <img
                src="https://placekitten.com/150/150?image=3"
                alt="Image 3"
                className="circle-image"
              />
            </div>
            <div className="circle-container">
              <img
                src="https://placekitten.com/150/150?image=4"
                alt="Image 4"
                className="circle-image"
              />
            </div>
            <div className="circle-container">
              <img
                src="https://placekitten.com/150/150?image=5"
                alt="Image 5"
                className="circle-image"
              />
            </div>
          </div>
          <div className="row">
            {/* Second Row with 1 Circle */}
            <div className="circle-container">
              <img
                src="https://placekitten.com/150/150?image=6"
                alt="Image 6"
                className="circle-image"
              />
            </div>
          </div>
        </div>
      );
    };
    
   
    
  
export default Followers