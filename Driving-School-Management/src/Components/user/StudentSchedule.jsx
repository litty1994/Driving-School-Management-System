import React from 'react';
import { Table, Container, Badge } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';

const StudentSchedule = () => {
  const classes = [
    {
      id: 1,
      date: '2024-11-10',
      time: '10:00 AM - 11:30 AM',
      type: 'Theory',
      instructor: 'John Doe',
      location: 'Room 101',
      status: 'Upcoming'
    },
    {
      id: 2,
      date: '2024-11-12',
      time: '2:00 PM - 3:30 PM',
      type: 'Practical',
      instructor: 'Jane Smith',
      location: 'Driving Range A',
      status: 'Upcoming'
    },
    {
      id: 3,
      date: '2024-11-15',
      time: '9:00 AM - 10:30 AM',
      type: 'Theory',
      instructor: 'John Doe',
      location: 'Room 101',
      status: 'Completed'
    },
  ];

  return (
    <Container className="my-5 p-4" style={{
      maxWidth: '800px',
      background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)'
    }}>
      <div className="d-flex align-items-center justify-content-center mb-4">
        <FaCalendarAlt size={36} className="text-primary me-3" />
        <h3 className="text-center mb-0" style={{ color: '#0d6efd', fontWeight: 'bold' }}>My Class Schedule</h3>
      </div>

      <Table responsive bordered hover style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <thead style={{ backgroundColor: '#0d6efd', color: 'white' }}>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Class Type</th>
            <th>Instructor</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id} style={{
              transition: 'all 0.3s',
              cursor: 'pointer',
              backgroundColor: cls.status === 'Upcoming' ? '#e6ffed' : '#f0f0f0'
            }}>
              <td style={{ fontWeight: '500' }}>{cls.date}</td>
              <td style={{ fontWeight: '500' }}>{cls.time}</td>
              <td style={{ fontWeight: '500' }}>{cls.type}</td>
              <td>{cls.instructor}</td>
              <td>{cls.location}</td>
              <td>
                <Badge
                  bg={cls.status === 'Upcoming' ? 'success' : 'secondary'}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                >
                  {cls.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StudentSchedule;
