import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function WecareNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">WeCare</Navbar.Brand>
                <Nav>
                    <div className='right-menu'>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>Call Us 000 2233447</span>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}