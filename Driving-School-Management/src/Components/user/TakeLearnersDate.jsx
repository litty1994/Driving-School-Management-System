import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { FaCalendarCheck } from 'react-icons/fa';

const TakeLearnersDate = () => {
  const [permissionRequested, setPermissionRequested] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleRequestPermission = () => {
    setPermissionRequested(true);
    // Simulate instructor approval for this demo
    setTimeout(() => {
      setIsApproved(true);
    }, 2000); // Simulated delay for approval
  };

  const handleBookDate = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <Container
      className="my-5 p-5"
      style={{
        maxWidth: '650px',
        background: 'linear-gradient(135deg, #e3f2fd, #ffffff)',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="text-center mb-4">
        <FaCalendarCheck size={40} className="text-primary mb-2" />
        <h3 style={{ color: '#0d6efd', fontWeight: 'bold' }}>Take Learner's Test Date</h3>
      </div>

      {/* Request Permission Section */}
      {!permissionRequested && (
        <div className="text-center">
          <p className="mb-4" style={{ fontSize: '1.1rem', color: '#555' }}>
            Send a request to your instructor for permission to book a test date.
          </p>
          <Button
            variant="primary"
            onClick={handleRequestPermission}
            className="px-4 py-2"
            style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '8px',
              transition: 'background-color 0.3s ease',
            }}
          >
            Request Permission
          </Button>
        </div>
      )}

      {/* Feedback Message */}
      {permissionRequested && !isApproved && (
        <Alert variant="info" className="mt-4 text-center" style={{ fontSize: '1rem', fontWeight: '500' }}>
          Request sent! Waiting for instructor's approval...
        </Alert>
      )}

      {isApproved && (
        <Alert variant="success" className="mt-4 text-center" style={{ fontSize: '1rem', fontWeight: '500' }}>
          Permission granted! You can now book a test date.
        </Alert>
      )}

      {/* Book Date Section */}
      {isApproved && !bookingConfirmed && (
        <Form onSubmit={handleBookDate} className="mt-4">
          <Form.Group controlId="formDate" className="mb-3">
            <Form.Label style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Select Date</Form.Label>
            <Form.Control
              type="date"
              required
              style={{
                padding: '12px',
                borderRadius: '6px',
                fontSize: '1rem',
                border: '1px solid #ced4da',
                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            className="w-100 mt-2"
            style={{
              padding: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '8px',
              transition: 'background-color 0.3s ease',
            }}
          >
            Book Date
          </Button>
        </Form>
      )}

      {/* Confirmation Message */}
      {bookingConfirmed && (
        <Alert variant="success" className="mt-4 text-center" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
          Date booked successfully! Check your schedule for confirmation.
        </Alert>
      )}
    </Container>
  );
};

export default TakeLearnersDate;
