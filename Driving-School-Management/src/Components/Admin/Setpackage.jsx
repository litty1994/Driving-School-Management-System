import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  InputGroup,
  FormControl,
  Alert,
} from 'react-bootstrap';
import { FaCar, FaMotorcycle, FaCarSide, FaEdit, FaTrash } from 'react-icons/fa';

const Setpackage = () => {
  const [packages, setPackages] = useState([
    { id: 1, name: 'Car Package', duration: 10, paymentPerHour: 20, icon: <FaCar className="text-primary" /> },
    { id: 2, name: 'Two-Wheeler Package', duration: 8, paymentPerHour: 15, icon: <FaMotorcycle className="text-success" /> },
    { id: 3, name: 'Car & Scooter Package', duration: 12, paymentPerHour: 25, icon: <FaCarSide className="text-danger" /> },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editPackage, setEditPackage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleAddPackage = () => {
    setEditPackage(null);
    setShowModal(true);
  };

  const handleEditPackage = (pkg) => {
    setEditPackage(pkg);
    setShowModal(true);
  };

  const handleSavePackage = () => {
    if (editPackage?.id) {
      setPackages(packages.map((pkg) => (pkg.id === editPackage.id ? editPackage : pkg)));
      setAlertMessage('Package updated successfully!');
    } else {
      setPackages([
        ...packages,
        {
          id: packages.length + 1,
          name: editPackage.name,
          duration: editPackage.duration,
          paymentPerHour: editPackage.paymentPerHour,
          icon: <FaCar className="text-primary" />,
        },
      ]);
      setAlertMessage('New package added successfully!');
    }
    setShowModal(false);
  };

  const handleDeletePackage = (id) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
    setAlertMessage('Package deleted successfully!');
  };

  const filteredPackages = packages.filter((pkg) =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid style={{ background: 'linear-gradient(135deg, #eef2f3, #8a9ca8)', minHeight: '100vh', padding: '30px' }}>
      <Row>
        <Col>
          <h3 className="text-center mb-4 text-dark">Set Packages</h3>

          {alertMessage && (
            <Alert variant="success" onClose={() => setAlertMessage('')} dismissible>
              {alertMessage}
            </Alert>
          )}

          <Row className="mb-4">
            <Col md={6}>
              <InputGroup>
                <FormControl
                  placeholder="Search Packages"
                  aria-label="Search Packages"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={6} className="text-end">
              <Button variant="primary" size="lg" onClick={handleAddPackage}>
                + Add New Package
              </Button>
            </Col>
          </Row>

          <Row>
            {filteredPackages.map((pkg) => (
              <Col md={4} key={pkg.id} className="mb-4">
                <Card className="shadow-sm h-100 border-0" style={{ borderRadius: '15px' }}>
                  <Card.Body
                    className="text-center"
                    style={{
                      backgroundColor: '#f9f9f9',
                      borderTop: '4px solid #17a2b8',
                      borderRadius: '15px',
                    }}
                  >
                    <div className="mb-3 display-4">{pkg.icon}</div>
                    <Card.Title>{pkg.name}</Card.Title>
                    <Card.Text>
                      <strong>Duration:</strong> {pkg.duration} hrs
                      <br />
                      <strong>Payment:</strong> ${pkg.paymentPerHour}/hr
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{ background: '#e8f0f2', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}
                  >
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEditPackage(pkg)}
                        style={{ width: '48%' }}
                      >
                        <FaEdit /> Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeletePackage(pkg.id)}
                        style={{ width: '48%' }}
                      >
                        <FaTrash /> Delete
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Modal for Adding/Editing Packages */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editPackage ? 'Edit Package' : 'Add New Package'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="packageName" className="mb-3">
              <Form.Label>Package Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter package name"
                value={editPackage?.name || ''}
                onChange={(e) => setEditPackage({ ...editPackage, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="packageDuration" className="mb-3">
              <Form.Label>Duration (hours)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter duration"
                value={editPackage?.duration || ''}
                onChange={(e) => setEditPackage({ ...editPackage, duration: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="paymentPerHour" className="mb-3">
              <Form.Label>Payment per Hour</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter payment per hour"
                value={editPackage?.paymentPerHour || ''}
                onChange={(e) => setEditPackage({ ...editPackage, paymentPerHour: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSavePackage}>
            {editPackage ? 'Save Changes' : 'Add Package'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Setpackage;
