import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
const Projects = () => {
  return (
    <>
    <div className="header" style={{display:"flex"}}>
    <img src="/markeble.jpg" alt="" />
        <div className="content" style={{ display: "flex", justifyContent:"space-between"}}>
          <div className="content_para" style={{marginTop:"20px"}}> A Training Project</div>
          
          <FontAwesomeIcon icon={faCog} className="settings-icon"  style={{marginTop:"20px"}}/>
        </div>
       
    </div>
    <div className="header" style={{display:"flex"}}>
    <img src="/markeble.jpg" alt="" />
        <div className="content" style={{ display: "flex", justifyContent:"space-between"}}>
          <div className="content_para" style={{marginTop:"20px"}}> A Training Project</div>
          
          <FontAwesomeIcon icon={faCog} className="settings-icon"  style={{marginTop:"20px"}}/>
        </div>
       
    </div>
</>
  )
}

export default Projects