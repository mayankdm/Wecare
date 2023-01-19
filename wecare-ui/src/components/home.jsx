import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CoachReg from './Coach-register';
import CoachRegistered from './CoachRegistered';
import CoachLogin from './CoachLogin';
import UserReg from './user-register';
import UserRegistered from './UserRegistered';
import UserLogin from './userLogin';
import CoachHome from './CoachHome';
import CoachProfile from './CoachProfile';
import UserHomeCoachCard from './UserHomeCoarchCard';
import UserProfile from './UserProfile';
import UserAppointmentCard from './userAppointmentCard';
import BookAppointment from './BookAppointment';
import AppointmentSuccess from './appointment-success';

export default function Home() {
    return (
        <>
            <h1 className="body-heading">We are the heart of appropriate care</h1>
            <div className='home-container'>
                <Card className='home-card'>
                    <i className='fa fa-user-md home-user-md'></i>
                    <Card.Body>
                        <Button className='home-button' variant="primary">Login as Coach</Button>
                        <Button className='home-button' variant="primary">Join as Coach</Button>
                    </Card.Body>
                </Card>
                <Card className='home-card'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <i className='fa fa-user home-user-md'></i>
                    <Card.Body>
                        <Button className='home-button' variant="primary">Login as User</Button>
                        <Button className='home-button' variant="primary">Join as User</Button>
                    </Card.Body>
                </Card>
            </div>
            <CoachReg></CoachReg>
            <CoachRegistered></CoachRegistered>
            <CoachLogin></CoachLogin>
            <UserReg></UserReg>
            <UserRegistered></UserRegistered>
            <UserLogin></UserLogin>
            <CoachHome></CoachHome>
            <CoachProfile></CoachProfile>
            <UserHomeCoachCard></UserHomeCoachCard>
            <UserProfile></UserProfile>
            <UserAppointmentCard></UserAppointmentCard>
            <BookAppointment></BookAppointment>
            <AppointmentSuccess></AppointmentSuccess>
        </>
    )
}