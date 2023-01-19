import Card from 'react-bootstrap/Card';
export default function CoachProfile() {
    return (
        <Card className="text-center coach-home-card">
            <Card.Body>
                <div className='coach-profile-body'>
                    <i className='fa fa-user-md profile-user-md'></i>
                    <div className='coach-profile-content'>
                        <Card.Title className='coach-profile-text'>Coach Id:1</Card.Title>
                        <Card.Text className='coach-profile-text'>Date of Birth:1/1/1996</Card.Text>
                        <Card.Text className='coach-profile-text'>Mobile No:123456789</Card.Text>
                        <Card.Text className='coach-profile-text'>Mobile No:123456789</Card.Text>
                        <Card.Text className='coach-profile-text'>Speciality:Confidence</Card.Text>
                        <Card.Text className='coach-profile-text'>Issues</Card.Text>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}