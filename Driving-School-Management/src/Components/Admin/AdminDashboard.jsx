import React, { useState } from 'react'
import ManageStudents from './ManageStudents';
import ClassSchedule from './ClassSchedule';
import TestDates from './TestDates';
import Messages from './Messages';
import Settings from './Settings';
import './AdminDashboard.css'


import { FaUsers, FaCalendarAlt, FaClipboardCheck, FaEnvelope, FaCog } from 'react-icons/fa';
import Setpackage from './Setpackage';

const AdminDashboard=()=> {
    const [activePage, setActivePage] = useState('ManageStudents'); // Default page
  
    // Function to render content based on the active page
    const renderContent = () => {
      switch (activePage) {
        case 'ManageStudents':
          return <ManageStudents/>;
          case 'Setpackage':
          return <Setpackage/>
        case 'ClassSchedule':
          return <ClassSchedule/>
        case 'TestDates':
          return <TestDates/>
        case 'Messages':
          return <Messages/>;
        case 'Settings':
          return <Settings/>
        default:
          return <div>Select an option from the menu</div>;
      }
    };
    
    
    
  return (
    <div className="container-fluid dashboard">
    <div className="row">
      {/* Sidebar */}
      <div className=" col-md-3 col-lg-2 sidebar p-4" >
        <h4 className="text-white mb-4">Welcome Neel....</h4>
        <ul className="list-unstyled">
          <li>
            <button onClick={() => setActivePage('ManageStudents')} className="btn btn-link d-flex align-items-center">
              <FaUsers className="me-2" /> ManageStudents
            </button>
          </li>
          <li>
            <button onClick={() => setActivePage('Setpackage')} className="btn btn-link d-flex align-items-center">
              <FaCog className="me-2" /> Set Package
            </button>
          </li>
          <li>
            <button onClick={() => setActivePage('ClassSchedule')} className="btn btn-link d-flex align-items-center">
              <FaCalendarAlt className="me-2" /> ClassSchedule
            </button>
          </li>
          <li>
            <button onClick={() => setActivePage('TestDates')} className="btn btn-link d-flex align-items-center">
              <FaClipboardCheck className="me-2" /> TestDates
            </button>
          </li>
          
          <li>
            <button onClick={() => setActivePage('Messages')} className="btn btn-link d-flex align-items-center">
              <FaEnvelope className="me-2" /> Message 
            </button>
            <li>
            <button onClick={() => setActivePage('Settings')} className="btn btn-link d-flex align-items-center">
              <FaCog className="me-2" /> Settings
            </button>
          </li>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="col-md-9 col-lg-10 content p-4">
        <div className="content-header bg-primary text-white p-3 rounded mb-3">
          <h2>{activePage.replace(/([A-Z])/g, ' $1').trim()}</h2>
        </div>
        <div className="content-area bg-white p-4 shadow-sm rounded">
          {renderContent()}
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default AdminDashboard
