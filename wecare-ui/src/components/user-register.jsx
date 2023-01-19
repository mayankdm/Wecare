import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function UserReg() {
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
        <Card className='coach-reg-card'>
            <Card.Body>
                <div className='coach-reg-header'>
                    <i className='fa fa-user reg-user-md'></i>
                    <Card.Title>User Profile</Card.Title>
                </div>
                <Card.Text>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="reg-form-group" controlId="formBasicEmail">
                            <div className='reg-form-row'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" maxLength="50" minLength="3"
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your name.
                                </Form.Control.Feedback>
                            </div>
                            <div className='reg-form-row'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" maxLength="10" minLength="5" required />
                                <Form.Control.Feedback type="invalid">
                                    Passowrd is required.
                                </Form.Control.Feedback>
                            </div>
                        </Form.Group>
                        <Form.Group className="reg-form-group" controlId="formBasicEmail">
                            <div className='reg-form-row'>
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Mobile Number" maxLength="10" required />
                                <Form.Control.Feedback type="invalid">
                                    Mobile number is required.
                                </Form.Control.Feedback>
                            </div>
                            <div className='reg-form-row'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" required />
                                <Form.Control.Feedback type="invalid">
                                    Email is required.
                                </Form.Control.Feedback>
                            </div>
                        </Form.Group>

                        <Form.Group className="reg-form-group" controlId="formBasicPassword">
                            <div className='reg-form-row'>
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" style={{ width: "95%" }} min="2003-01-01" max="2123-12-30" required />
                                <Form.Control.Feedback type="invalid">
                                    date of birth is required. must be in betwwen 20 to 100 years!
                                </Form.Control.Feedback>
                            </div>
                            <div className='reg-form-gender'>
                                <Form.Label style={{ width: "100%" }}>Gender</Form.Label>
                                <div className='gender-container'>
                                    <Form.Control type="radio" name="gender" style={{ appearance: "auto", width: "50%" }} required />
                                    <Form.Label>Male</Form.Label>
                                    <Form.Control type="radio" name="gender" style={{ appearance: "auto", width: "50%" }} required />
                                    <Form.Label>Female</Form.Label>
                                    <Form.Control.Feedback type="invalid" style={{ breakAfter: 'always' }}>
                                        Select a gender.
                                    </Form.Control.Feedback>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className="reg-form-group" controlId="formBasicEmail">
                            <div className='reg-form-row'>
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control type="text" placeholder="Pincode" maxLength="6" required />
                                <Form.Control.Feedback type="invalid">
                                    Pincode should have 6 digits.
                                </Form.Control.Feedback>
                            </div>
                            <div className='reg-form-row'>
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" maxLength="20" minLength="6" required />
                                <Form.Control.Feedback type="invalid">
                                    City should have 6 to 20 characters.
                                </Form.Control.Feedback>
                            </div>
                        </Form.Group>
                        <Form.Group className="reg-form-group" controlId="formBasicEmail">
                            <div className='reg-form-row'>
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State" maxLength="20" minLength="6" required />
                                <Form.Control.Feedback type="invalid">
                                    State should have 6 to 20 characters.
                                </Form.Control.Feedback>
                            </div>
                            <div className='reg-form-row'>
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Country" maxLength="20" minLength="6" required />
                                <Form.Control.Feedback type="invalid">
                                    Country should have 6 to 20 characters.
                                </Form.Control.Feedback>
                            </div>
                        </Form.Group>
                        <div>
                            <Button className='coach-reg-button' variant="primary" type="submit">
                                Register
                            </Button>
                        </div>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}