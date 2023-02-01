import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { registerCoach } from '../action';
import coachImg from '../images/coach.png';

export default connect()(function CoachReg(props) {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("Mayank");
    const [password, setPassword] = useState("12345678");
    const [dob, setDob] = useState("2023-02-09");
    const [gender, setGender] = useState(true);
    const [mobile, setMobile] = useState("123456789");
    const [speciality, setSpeciality] = useState("Speciality1");
    const [post, setPost] = useState({});
    const [register, setRegister] = useState(true);
    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        const coach = { name: name, password: password, dob: dob, gender: gender, mobile: mobile, speciality: speciality }
        console.log(coach);
        await axios.post("http://localhost:8081/coach-api/coaches", coach).then((response) => {
            if (response) {
                setPost(response.data)
                setRegister(false)
            }
        }).catch((error) => {
            console.log(error.message);
        });
        props.dispatch(registerCoach(coach));

    };
    return (
        <>
            {register ?
                <Card className='coach-reg-card'>
                    <Card.Body>
                        <div className='coach-reg-header'>
                            <img src={coachImg} className="reg-user-md" alt="..." />
                            <Card.Title>Life Coach Profile</Card.Title>
                        </div>
                        <Card.Text>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3 reg-form-group" controlId="coachName">
                                    <div className='reg-form-row'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" maxLength="50" minLength="3"
                                            required onChange={(e) => setName(e.target.value)} />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a Name.
                                        </Form.Control.Feedback>
                                    </div>
                                    <div className='reg-form-row'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" maxLength="10" minLength="5" required
                                            onChange={(e) => setPassword(e.target.value)} />
                                        <Form.Control.Feedback type="invalid">
                                            Passowrd is required.
                                        </Form.Control.Feedback>
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3 reg-form-group" controlId="formBasicPassword">
                                    <div className='reg-form-row'>
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control type="date" style={{ width: "95%" }} min="2003-01-01" max="2123-12-30" required
                                            onChange={(e) => setDob(e.target.value)} />
                                        <Form.Control.Feedback type="invalid">
                                            date of birth is required. must be in betwwen 20 to 100 years!
                                        </Form.Control.Feedback>
                                    </div>
                                    <div className='reg-form-gender'>
                                        <Form.Label style={{ width: "100%" }}>Gender</Form.Label>
                                        <div className='gender-container'>
                                            <Form.Control type="radio" name="gender" style={{ appearance: "auto", width: "50%" }} required
                                                onChange={(e) => setGender(e.target.checked)} />
                                            <Form.Label>Male</Form.Label>
                                            <Form.Control type="radio" name="gender" style={{ appearance: "auto", width: "50%" }} required
                                                onChange={(e) => setGender(e.target.checked)} />
                                            <Form.Label>Female</Form.Label>
                                            <Form.Control.Feedback type="invalid" style={{ breakAfter: 'always' }}>
                                                Select a gender.
                                            </Form.Control.Feedback>
                                        </div>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3 reg-form-group" controlId="formBasicEmail">
                                    <div className='reg-form-row'>
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Mobile Number" maxLength="10" required
                                            onChange={(e) => setMobile(e.target.value)} />
                                        <Form.Control.Feedback type="invalid">
                                            Mobile number is required.
                                        </Form.Control.Feedback>
                                    </div>
                                    <div className='reg-form-row'>
                                        <Form.Label>Speciality</Form.Label>
                                        <Form.Control type="text" placeholder="Speciality" maxLength="50" minLength="10" required
                                            onChange={(e) => setSpeciality(e.target.value)} />
                                        <Form.Control.Feedback type="invalid">
                                            Speciality is required.
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
                :
                <div className="coach-reg-container">
                    <i className='fa fa-user-md coach-reg-md'></i>
                    <h1>You are a Coach now!</h1>
                    <h3>Your Coach Id is {post.id}</h3>
                    <button className="btn btn-primary coach-reg-login" to="/coachlogin">Login Now</button>
                </div>
            }
        </>
    )
})