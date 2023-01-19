import Card from 'react-bootstrap/Card';
export default function CoachHome() {
    return (
        <Card className="text-center coach-home-card">
            <Card.Body>
                <Card.Title>Appointment Date:</Card.Title>
                <Card.Title>2020-09-24</Card.Title>
                <Card.Title>Slot:10 AM to 11 AM</Card.Title>
                <Card.Text>Booking id:1</Card.Text>
                <Card.Text>User id:1</Card.Text>
            </Card.Body>
        </Card>
    )
}