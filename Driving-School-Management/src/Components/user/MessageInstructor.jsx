import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const MessageInstructor = () => {
  return (
    <Container className="my-5 p-4" style={{
      maxWidth: '600px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)'
    }}>
      <h3 className="text-center mb-4" style={{ color: '#0d6efd' }}>Message Your Instructor</h3>
      <Form>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label style={{ fontWeight: 'bold' }}>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            style={{ padding: '10px', borderRadius: '5px' }}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label style={{ fontWeight: 'bold' }}>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            style={{ padding: '10px', borderRadius: '5px' }}
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label style={{ fontWeight: 'bold' }}>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Type your message here"
            style={{ padding: '10px', borderRadius: '5px', resize: 'none' }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100 mt-3"
          style={{
            padding: '10px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            borderRadius: '5px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
          }}
        >
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default MessageInstructor;
