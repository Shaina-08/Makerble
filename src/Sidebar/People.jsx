import React from 'react'

const People = () => {

  return (
    <div className="photo-gallery">
      <div className="row">
        {/* First Row with 5 Circles */}
        <div className="circle-container">
          <img
            src="https://placekitten.com/150/150?image=11"
            alt="Image 1"
            className="circle-image"
          />
        </div>
        <div className="circle-container">
          <img
            src="https://placekitten.com/150/150?image=12"
            alt="Image 2"
            className="circle-image"
          />
        </div>
        <div className="circle-container">
          <img
            src="https://placekitten.com/150/150?image=13"
            alt="Image 3"
            className="circle-image"
          />
        </div>
        <div className="circle-container">
          <img
            src="https://placekitten.com/150/150?image=14"
            alt="Image 4"
            className="circle-image"
          />
        </div>
        <div className="circle-container">
          <img
            src="https://placekitten.com/150/150?image=15"
            alt="Image 5"
            className="circle-image"
          />
        </div>
      </div>
      <div className="row">
        {/* Second Row with 1 Circle */}
        <div className="circle-container">
          <img
            src="https://placekitten.com/150/150?image=16"
            alt="Image 6"
            className="circle-image"
          />
        </div>
      </div>
    </div>
  );
};




export default People