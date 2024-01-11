import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
const Event = () => {
  return (
    <>
    <div className="header-heading">

    
    <div className="header">
        <div className="content">
          <div className="content-heading">Youth Panel</div>
          <div className="content_para"> 1 Manager, 0 Worker, 0 Guests</div>
          <div className="content_para"> 13:00 02/03/23-15:3002/03/23</div>
        </div>
        <FontAwesomeIcon icon={faCog} className="settings-icon" />
    </div>
    <div className="header">
        <div className="content">
          <div className="content-heading">Digital Inclusion Event</div>
          
          <div className="content_para"> 1 Manager, 0 Worker, 0 Guests</div>
          <div className="content_para"> 13:0002/03/23-15:3002/03/23</div>
        </div>
        <FontAwesomeIcon icon={faCog} className="settings-icon" />
    </div>
    <div className="header">
        <div className="content">
          <div className="content-heading">Youth Panel</div>
          <div className="content_para"> 1 Manager, 0 Worker, 0 Guests</div>
          <div className="content_para"> 13:0002/03/23-15:3002/03/23</div>
        </div>
        <FontAwesomeIcon icon={faCog} className="settings-icon" />
    </div>
    </div>
    </>
  )
}

export default Event