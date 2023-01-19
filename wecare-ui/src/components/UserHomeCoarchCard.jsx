import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function UserHomeCoachCard() {
    return (
        <Card className="text-center coach-home-card">
            <Card.Body>
                <div className='coach-profile-body'>
                    <i className='fa fa-user-md profile-user-md'></i>
                    <div className='coach-profile-content'>
                        <Card.Title className='coach-profile-text'><h1>Rose</h1></Card.Title>
                        <Card.Title className='coach-profile-text'><h5>Coach Id: 1</h5></Card.Title>
                        <Card.Text className='coach-profile-text'>Mobile No:123456789</Card.Text>
                        <Card.Text className='coach-profile-text'>Speciality:Confidence</Card.Text>
                    </div>
                </div>
                <Button className='userhome-card-button' variant="primary" type="submit">
                    Book an Appointment
                </Button>
            </Card.Body>
        </Card>
    )
}