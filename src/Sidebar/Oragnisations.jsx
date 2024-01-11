import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
const Oragnisations = () => {
  return (
    <>
    <div className="header-heading">

    
    <div className="header">
    <img src="/markeble.jpg" alt="" />
        <div className="content">
          <div className="content-heading">An Organisation Demo</div>
          <div className="content_para"> Admin</div>
         
        </div>
        <FontAwesomeIcon icon={faCog} className="settings-icon" />
    </div>
    
    <div className="header">
    <img src="/markeble.jpg" alt="" />
        <div className="content">
          <div className="content-heading">Oak Tree Secondary School</div>
          <div className="content_para"> Member</div>
         
        </div>
        <FontAwesomeIcon icon={faCog} className="settings-icon" />
    </div>
    </div>
    </>
  )
}

export default Oragnisations