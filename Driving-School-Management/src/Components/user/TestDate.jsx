import React, { useState } from 'react';
import { Form, Button, Container, Alert, ListGroup } from 'react-bootstrap';
import { FaClipboardCheck, FaUserCheck, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa';

const TestDate = () => {
  const [slotChecked, setSlotChecked] = useState(false);
  const [slotsAvailable, setSlotsAvailable] = useState(false);
  const [permissionRequested, setPermissionRequested] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Simulated available slots (In a real app, this would come from the server)
  const availableSlots = [
    { time: '2024-11-15 10:00 AM', instructor: 'John Doe' },
    { time: '2024-11-15 02:00 PM', instructor: 'Jane Smith' },
    { time: '2024-11-16 09:00 AM', instructor: 'John Doe' },
  ];

  // Handle Slot Checking
  const handleCheckSlots = () => {
    setSlotChecked(true);
    if (availableSlots.length > 0) {
      setSlotsAvailable(true);
    } else {
      setSlotsAvailable(false);
    }
  };

  // Request Instructor's Approval
  const handleRequestPermission = () => {
    setPermissionRequested(true);
    setTimeout(() => {
      setIsApproved(true); // Simulate instructor approval after 3 seconds
    }, 3000);
  };

  // Handle Booking Date
  const handleBookDate = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <Container
      className="my-5 p-5"
      style={{
        maxWidth: '700px',
        background: 'linear-gradient(135deg, #e3f2fd, #ffffff)',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="text-center mb-4">
        <FaClipboardCheck size={40} className="text-primary mb-2" />
        <h3 style={{ color: '#0d6efd', fontWeight: 'bold' }}>Book Your Test Date</h3>
      </div>

      {/* Step 1: Check Slot Availability */}
      {!slotChecked && (
        <div className="text-center">
          <p className="mb-4" style={{ fontSize: '1.1rem', color: '#555' }}>
            Check available time slots for your driving test.
          </p>
          <Button
            variant="info"
            onClick={handleCheckSlots}
            className="px-4 py-2"
            style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '8px',
              transition: 'background-color 0.3s ease',
            }}
          >
            Check Slot Availability
          </Button>
        </div>
      )}

      {/* Show Available Slots */}
      {slotChecked && !slotsAvailable && (
        <Alert variant="warning" className="mt-4 text-center" style={{ fontSize: '1rem', fontWeight: '500' }}>
          No slots available at the moment. Please try again later.
        </Alert>
      )}

      {slotChecked && slotsAvailable && (
        <div>
          <h5 className="text-center">Available Slots</h5>
          <ListGroup variant="flush">
            {availableSlots.map((slot, index) => (
              <ListGroup.Item
                key={index}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedSlot(slot)}
              >
                <strong>{slot.time}</strong> - Instructor: {slot.instructor}
              </ListGroup.Item>
            ))}
          </ListGroup>
          {selectedSlot && (
            <div className="text-center mt-3">
              <Button
                variant="primary"
                onClick={handleRequestPermission}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '8px',
                }}
              >
                Request Permission for {selectedSlot.time}
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Step 2: Request Permission from Instructor */}
      {permissionRequested && !isApproved && (
        <Alert variant="info" className="mt-4 text-center">
          <FaExclamationTriangle className="mr-2" />
          Waiting for instructor's approval...
        </Alert>
      )}

      {isApproved && (
        <Alert variant="success" className="mt-4 text-center">
          <FaUserCheck className="mr-2" />
          Permission granted! You can now book your test date.
        </Alert>
      )}

      {/* Step 3: Book Test Date */}
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
            Book Test Date
          </Button>
        </Form>
      )}

      {/* Confirmation Message */}
      {bookingConfirmed && (
        <Alert variant="success" className="mt-4 text-center" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
          Test date booked successfully! Check your schedule for confirmation.
        </Alert>
      )}
    </Container>
  );
};

export default TestDate;
