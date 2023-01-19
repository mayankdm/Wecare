import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function UserProfile() {
    return (
        <Card className="text-center coach-home-card">
            <Card.Body>
                <div className='coach-profile-body'>
                    <i className='fa fa-user profile-user-md'></i>
                    <div className='coach-profile-content'>
                        <Card.Title className='coach-profile-text'><h1>Maria</h1></Card.Title>
                        <Card.Text className='coach-profile-text'>Date of Birth:1/1/1996</Card.Text>
                        <Card.Text className='coach-profile-text'>Email Id: maria@gmail.com</Card.Text>
                        <Card.Text className='coach-profile-text'>Mobile No:123456789</Card.Text>
                        <Card.Text className='coach-profile-text'>Address:Bangalore, Karnataka, India</Card.Text>
                        <Card.Text className='coach-profile-text'>Pincode:123456</Card.Text>
                    </div>
                </div>
                <Button className='usercard-profile-button' variant="primary" type="submit">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back
                </Button>
            </Card.Body>
        </Card>
    )
}