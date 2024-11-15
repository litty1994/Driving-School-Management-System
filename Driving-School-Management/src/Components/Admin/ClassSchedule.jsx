import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton, Card, Table } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ClassSchedule = () => {
  const [instructor, setInstructor] = useState('');
  const [student, setStudent] = useState('');
  const [classType, setClassType] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [schedule, setSchedule] = useState([]);

  // Dummy lists for dropdowns
  const instructors = ['Instructor 1', 'Instructor 2', 'Instructor 3'];
  const students = ['Student A', 'Student B', 'Student C'];
  const classTypes = ['Practical', 'Theory', 'Mock Test'];
  const locations = ['Location A', 'Location B', 'Location C'];

  const handleSchedule = (e) => {
    e.preventDefault();
    // Add the new scheduled class to the schedule array
    setSchedule([
      ...schedule,
      { student, instructor, classType, date, time, location, duration, paymentStatus }
    ]);
    // Reset form after submission
    setInstructor('');
    setStudent('');
    setClassType('');
    setLocation('');
    setDate(new Date());
    setTime('');
    setDuration('');
    setPaymentStatus(false);
  };

  return (
    <Container className="mt-5" style={{ background: 'linear-gradient(135deg, #eef2f3, #8a9ca8)', padding: '30px', borderRadius: '8px' }}>
      <Row>
        <Col md={3}>
          {/* Sidebar or additional information can go here */}
        </Col>
        <Col md={9}>
          <Card className="shadow-lg mb-4" style={{ background: '#ffffff' }}>
            <Card.Body>
              <h3 className="text-center mb-4 text-primary">Schedule a Driving Class</h3>
              <Form onSubmit={handleSchedule}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="instructorSelect">
                      <Form.Label>Instructor</Form.Label>
                      <DropdownButton
                        variant="outline-primary"
                        title={instructor || 'Select Instructor'}
                        onSelect={(e) => setInstructor(e)}
                      >
                        {instructors.map((inst, index) => (
                          <Dropdown.Item key={index} eventKey={inst}>
                            {inst}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="studentSelect">
                      <Form.Label>Student</Form.Label>
                      <DropdownButton
                        variant="outline-primary"
                        title={student || 'Select Student'}
                        onSelect={(e) => setStudent(e)}
                      >
                        {students.map((stu, index) => (
                          <Dropdown.Item key={index} eventKey={stu}>
                            {stu}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="classTypeSelect">
                      <Form.Label>Class Type</Form.Label>
                      <DropdownButton
                        variant="outline-primary"
                        title={classType || 'Select Class Type'}
                        onSelect={(e) => setClassType(e)}
                      >
                        {classTypes.map((type, index) => (
                          <Dropdown.Item key={index} eventKey={type}>
                            {type}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="classLocation">
                      <Form.Label>Location</Form.Label>
                      <DropdownButton
                        variant="outline-primary"
                        title={location || 'Select Location'}
                        onSelect={(e) => setLocation(e)}
                      >
                        {locations.map((loc, index) => (
                          <Dropdown.Item key={index} eventKey={loc}>
                            {loc}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="classDate">
                      <Form.Label>Date</Form.Label>
                      <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        dateFormat="MMMM d, yyyy"
                        className="form-control"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="classTime">
                      <Form.Label>Time</Form.Label>
                      <Form.Control
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="classDuration">
                      <Form.Label>Duration (hours)</Form.Label>
                      <Form.Control
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="paymentStatus">
                      <Form.Label>Payment Status</Form.Label>
                      <Form.Check
                        type="checkbox"
                        label="Paid"
                        checked={paymentStatus}
                        onChange={(e) => setPaymentStatus(e.target.checked)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="success" type="submit" className="w-100">
                  Schedule Class
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {/* View Scheduled Classes */}
          <Card className="shadow-lg mt-5" style={{ background: '#ffffff' }}>
            <Card.Body>
              <h4 className="text-center mb-4 text-success">Scheduled Classes</h4>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Instructor</th>
                    <th>Class Type</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Duration</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.length > 0 ? (
                    schedule.map((classItem, index) => (
                      <tr key={index}>
                        <td>{classItem.student}</td>
                        <td>{classItem.instructor}</td>
                        <td>{classItem.classType}</td>
                        <td>{classItem.date.toLocaleDateString()}</td>
                        <td>{classItem.time}</td>
                        <td>{classItem.location}</td>
                        <td>{classItem.duration} hours</td>
                        <td>{classItem.paymentStatus ? 'Paid' : 'Unpaid'}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center">
                        No classes scheduled yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ClassSchedule;
