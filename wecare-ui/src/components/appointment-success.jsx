import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function AppointmentSuccess() {
    return (
        <Card className="text-center coach-home-card" style={{width: "30%"}}>
            <Card.Body>
                <div className='coach-profile-body'>
                    <div className='coach-profile-content'>
                        <Card.Text className='coach-profile-text'>Your appointment is scheduled successfully!</Card.Text>
                    </div>
                </div>
                <br></br>
                <br></br>
                <Button variant="primary" type="submit">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i> Go Back
                </Button>
            </Card.Body>
        </Card>
    )
}