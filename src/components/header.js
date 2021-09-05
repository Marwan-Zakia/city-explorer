
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
class Header extends React.Component {
    render() {
        return (
            <>

                <Navbar className='header' expand="lg" variant='light' bg="light">
                    <Navbar.Brand href="#"> City Explorer </Navbar.Brand>
                </Navbar>

            </>
        );
    }
}

export default Header;




