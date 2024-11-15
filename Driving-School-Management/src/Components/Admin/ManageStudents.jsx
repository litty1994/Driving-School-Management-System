import React, { useState } from 'react';
import { Table, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';

const ManageStudents = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', status: 'Active' },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: '', email: '', status: 'Active' });
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleAddStudent = () => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
    setShowAddModal(false);
    setNewStudent({ name: '', email: '', status: 'Active' });
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleViewStudent = (student) => {
    setSelectedStudent(student);
    setShowViewModal(true);
  };

  return (
    <Container style={{background:'linear-gradient(135deg, #eef2f3, #8a9ca8)', marginTop: '30px' }} className="manage-students">
      <Row className="mb-3">
        <Col>
          <h2 style={{ color: '#1e3d58', fontWeight: 'bold' }}>Manage Students</h2>
        </Col>
        <Col className="text-end">
          <Button
            variant="primary"
            onClick={() => setShowAddModal(true)}
            style={{ borderRadius: '50px', padding: '10px 20px', fontSize: '1rem' }}
          >
            Add New Student
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa' }}>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <span
                  style={{
                    color: student.status === 'Active' ? 'green' : 'red',
                    fontWeight: 'bold',
                  }}
                >
                  {student.status}
                </span>
              </td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  className="me-2"
                  onClick={() => handleViewStudent(student)}
                  style={{
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    padding: '5px 15px',
                    backgroundColor: '#17a2b8',
                    borderColor: '#17a2b8',
                  }}
                >
                  View
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteStudent(student.id)}
                  style={{
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    padding: '5px 15px',
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Student Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student's name"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                style={{ borderRadius: '10px' }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter student's email"
                value={newStudent.email}
                onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                style={{ borderRadius: '10px' }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={newStudent.status}
                onChange={(e) => setNewStudent({ ...newStudent, status: e.target.value })}
                style={{ borderRadius: '10px' }}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)} style={{ borderRadius: '20px' }}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleAddStudent}
            style={{ borderRadius: '20px', padding: '5px 20px', fontSize: '1rem' }}
          >
            Add Student
          </Button>
        </Modal.Footer>
      </Modal>

      {/* View Student Modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedStudent && (
            <>
              <p>
                <strong>Name:</strong> {selectedStudent.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedStudent.email}
              </p>
              <p>
                <strong>Status:</strong> {selectedStudent.status}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowViewModal(false)}
            style={{ borderRadius: '20px' }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageStudents;
