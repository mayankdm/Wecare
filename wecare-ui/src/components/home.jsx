import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import coachImg from '../images/coach.png';
import userImg from '../images/user.png';
// import UserRegistered from './UserRegistered';
// import CoachHome from './CoachHome';
// import CoachProfile from './CoachProfile';
// import UserHomeCoachCard from './UserHomeCoarchCard';
// import UserProfile from './UserProfile';
// import UserAppointmentCard from './userAppointmentCard';
// import BookAppointment from './BookAppointment';
// import AppointmentSuccess from './appointment-success';

export default function Home() {
    return (
        <>
            <h1 className="body-heading">We are the heart of appropriate care</h1>
            <div className='home-container'>
                <Card className='home-card'>
                    <img src={coachImg} alt="..." />
                    <Card.Body>
                        <Link to="/coachlogin"><Button className='home-button' variant="primary">Login as Coach</Button></Link>
                        <Link to="/coachreg"><Button className='home-button' variant="primary">Join as Coach</Button></Link>
                    </Card.Body>
                </Card>
                <Card className='home-card'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <img src={userImg} alt="..." />
                    <Card.Body>
                    <Link to="/userlogin"><Button className='home-button' variant="primary">Login as User</Button></Link>
                    <Link to="/userreg"><Button className='home-button' variant="primary">Join as User</Button></Link>
                    </Card.Body>
                </Card>
            </div>
            {/* <UserRegistered></UserRegistered>
            <CoachHome></CoachHome>
            <CoachProfile></CoachProfile>
            <UserHomeCoachCard></UserHomeCoachCard>
            <UserProfile></UserProfile>
            <UserAppointmentCard></UserAppointmentCard>
            <BookAppointment></BookAppointment>
            <AppointmentSuccess></AppointmentSuccess> */}
        </>
    )
}