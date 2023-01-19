import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function BookAppointment() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <Card className='book-appointment-card'>
            <Card.Body>
                <div className='coach-reg-header'>
                    <i className="fa fa-pencil-square-o reg-user-md" aria-hidden="true"></i>
                    <Card.Title>Proceed with your Appointment</Card.Title>
                </div>
                <Card.Text>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-2 reg-form-group" controlId="formBasicEmail">
                            <div className='reg-form-row'>
                                <Form.Label>Date of Appointment</Form.Label>
                                <Form.Control type="date" maxLength="50" minLength="3"
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Date should be any upcoming 7 days
                                </Form.Control.Feedback>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <div className='appointment-form-slot'>
                                <Form.Label className='appointment-form-slot-label'>Preferred Slot</Form.Label>
                                <div className='appointment-container'>
                                    <Form.Control className='appointment-feild' type="radio" name="slot" required />
                                    <Form.Label>9AM to 10AM</Form.Label>
                                    <Form.Control className='appointment-feild' type="radio" name="slot" required />
                                    <Form.Label>10AM to 11AM</Form.Label>
                                    <Form.Control className='appointment-feild' type="radio" name="slot" required />
                                    <Form.Label>11AM to 12PM</Form.Label>
                                    <Form.Control className='appointment-feild' type="radio" name="slot" required />
                                    <Form.Label>2PM to 3PM</Form.Label>
                                    <Form.Control className='appointment-feild' type="radio" name="slot" required />
                                    <Form.Label>3PM to 4PM</Form.Label>
                                    <Form.Control className='appointment-feild' type="radio" name="slot" required />
                                    <Form.Label>4PM to 5PM</Form.Label>
                                    <Form.Control.Feedback type="invalid" style={{ breakAfter: 'always' }}>
                                        Slot is required.
                                    </Form.Control.Feedback>
                                </div>
                            </div>
                        </Form.Group>
                        <Button className='coach-login-button' variant="primary" type="submit" style={{ background: "green", border: "none" }}>
                            Confirm your Appointment
                        </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}