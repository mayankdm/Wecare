import Card from 'react-bootstrap/Card';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
export default function CoachProfile() {
    const [coach, setCoach] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8081/coach-api/coaches").then((response) => {
            if (response) {
                setCoach(response.data);
            }
        }).catch((error) => {
            console.log(error.message);
        });
    });
    return (
        <Card className="text-center coach-home-card">
            <Card.Body>
                <div className='coach-profile-body'>
                    <i className='fa fa-user-md profile-user-md'></i>
                    <div className='coach-profile-content'>
                        <Card.Title className='coach-profile-text'>Coach Id:{coach.id}</Card.Title>
                        <Card.Text className='coach-profile-text'>Date of Birth:{coach.dob}</Card.Text>
                        <Card.Text className='coach-profile-text'>Mobile No:{coach.mobile}</Card.Text>
                        <Card.Text className='coach-profile-text'>Speciality:{coach.speciality}</Card.Text>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}