import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import coachImg from '../images/coach.png';

export default function CoachLogin() {
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
        <Card className='coach-login-card'>
            <Card.Body>
                <div className='coach-reg-header'>
                <img src={coachImg} className="reg-user-md" alt="..." />
                    <Card.Title>Login As Life Coach</Card.Title>
                </div>
                <Card.Text>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-2 reg-form-group" controlId="formBasicEmail">
                            <div className='reg-form-row'>
                                <Form.Control type="text" placeholder="Coach Id" maxLength="50" minLength="3"
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Coach id is required.
                                </Form.Control.Feedback>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-2 reg-form-group" controlId="formBasicPassword">
                            <div className='reg-form-row'>
                                <Form.Control type="password" placeholder="Password" maxLength="10" minLength="5" required />
                                <Form.Control.Feedback type="invalid">
                                    Passowrd must contain 5 to 10 characters.
                                </Form.Control.Feedback>
                            </div>
                        </Form.Group>
                        <Button className='coach-login-button' variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}