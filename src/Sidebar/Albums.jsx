import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
const Albums = () => {
  return (
    <>
   
    <div className="header" style={{display:"flex"}}>
    <img src="/markeble.jpg" alt="" />
        <div className="content" style={{ display: "flex", justifyContent:"space-between"}}>
          <div className="content-heading" style={{marginTop:"20px"}}> Robesten Trust</div>
          
          <FontAwesomeIcon icon={faCog} className="settings-icon"  style={{marginTop:"20px"}}/>
        </div>
       
    </div>
    <div className="header" style={{display:"flex"}}>
    <img src="/markeble.jpg" alt="" />
        <div className="content" style={{ display: "flex", justifyContent:"space-between"}}>
          <div className="content-heading" style={{marginTop:"20px"}}>FASE Funding </div>
          
          <FontAwesomeIcon icon={faCog} className="settings-icon"  style={{marginTop:"20px"}}/>
        </div>
       
    </div>
    </>
  )
}

export default Albums