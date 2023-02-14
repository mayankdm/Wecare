import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home";
import CoachLogin from './CoachLogin';
import CoachReg from './Coach-register';
import UserLogin from './userLogin';
import UserReg from './user-register';
import CoachHome from './CoachHome';
import CoachProfile from './CoachProfile';
export default function Body() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/coachlogin" element={<CoachLogin />} />
                    <Route exact path="/coachreg" element={<CoachReg />} />
                    <Route exact path="/userlogin" element={<UserLogin />} />
                    <Route exact path="/userreg" element={<UserReg />} />
                    <Route exact path="/coachhome" element={<CoachHome />} />
                    <Route exact path="/CoachProfile" element={<CoachProfile/>} />
                    {/* 
                    <Route exact path="/usersignup" element={<UserRegistration />} />
                    <Route exact path="/userlogin" element={<UserLogin />} />
                    <Route exact path="/userhome" element={<UserHome />} />
                    <Route exact path="/userviewprofile" element={<View />} /> */}
                </Routes>
                {/* <FooterNavBar /> */}
            </div>
        </Router>
    )
}