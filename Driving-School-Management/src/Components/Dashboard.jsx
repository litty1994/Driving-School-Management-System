import React, { useState } from 'react'
import { FaBoxOpen, FaCalendarAlt, FaClipboardCheck, FaEnvelope, FaUserClock } from 'react-icons/fa';
 import './Dashboard.css';
import Choosepackage from './user/Choosepackage';
import MessageInstructor from './user/MessageInstructor';
import StudentSchedule from './user/StudentSchedule';
import TakeLearnersDate from './user/TakeLearnersDate';
import TestDate from './user/TestDate';

const Dashboard = () => {
    const [activePage, setActivePage] = useState('choosePackage'); // Default page
  
    // Function to render content based on the active page
    const renderContent = () => {
      switch (activePage) {
        case 'choosePackage':
          return <Choosepackage/>;
        case 'viewSchedule':
          return <StudentSchedule/>
        case 'takeLearnersDate':
          return <TakeLearnersDate/>
        case 'takeTestDate':
          return <TestDate/>;
        case 'messageInstructor':
          return <MessageInstructor/>
        default:
          return <div>Select an option from the menu</div>;
      }
    };
  
   
  return (
   
    <div className="container-fluid dashboard">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 sidebar p-4">
          <h4 className="text-white mb-4">Welcome Neel....</h4>
          <ul className="list-unstyled">
            <li>
              <button onClick={() => setActivePage('choosePackage')} className="btn btn-link d-flex align-items-center">
                <FaBoxOpen className="me-2" /> Choose Package
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('viewSchedule')} className="btn btn-link d-flex align-items-center">
                <FaCalendarAlt className="me-2" /> View Schedule Class
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('takeLearnersDate')} className="btn btn-link d-flex align-items-center">
                <FaUserClock className="me-2" /> Take Learner's Date
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('takeTestDate')} className="btn btn-link d-flex align-items-center">
                <FaClipboardCheck className="me-2" /> Take Test Date
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('messageInstructor')} className="btn btn-link d-flex align-items-center">
                <FaEnvelope className="me-2" /> Message to Instructor
              </button>
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



export default Dashboard