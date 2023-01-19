import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function UserAppointmentCard() {
    return (
        <Card className="text-center coach-home-card" style={{width:"25%"}}>
            <Card.Body>
                <div className='coach-profile-body'>
                    <div className='coach-profile-content'>
                        <Card.Title className='coach-profile-text'><h1>Appointment Date:</h1></Card.Title>
                        <Card.Text className='coach-profile-text'><h1>2020-09-24</h1></Card.Text>
                        <Card.Text className='coach-profile-text'><h5>Slot: 10AM to 11AM</h5></Card.Text>
                        <br></br>
                        <Card.Text className='coach-profile-text'>Booking Id:1</Card.Text>
                        <Card.Text className='coach-profile-text'>User Id:1</Card.Text>
                        <Card.Text className='coach-profile-text'>Coach Id:1</Card.Text>
                    </div>
                </div>
                <br></br>
                <Button className='usercard-appointment-button' variant="primary" type="submit" style={{ background: "#0DCAF0" }}>
                    Reschedule Appointment
                </Button>
                <Button className='usercard-appointment-button' variant="primary" type="submit" style={{ background: "red" }}>
                    Cancel Appointment
                </Button>
            </Card.Body>
        </Card>
    )
}