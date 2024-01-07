import { useEffect, useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../styles/sideBar.css";

const SideBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isHomeActive, setHomeActive] = useState(location.pathname === '/dashboard');
    const [isCarsActive, setCarsActive] = useState(location.pathname === '/dashboard/cars');

    const handleHomeClick = () => {
        setHomeActive(true);
        setCarsActive(false);
    };

    const handleCarsClick = () => {
        setHomeActive(false);
        setCarsActive(true);
    };

    const handleLogoutClick = () => {
        console.log("Logout click cuy")
        // logic untuk logout: hapus token JWT dkk
        localStorage.removeItem('auth');

        navigate('/login')

        
    }

    useEffect(() => {
        setHomeActive(location.pathname === '/dashboard');
        setCarsActive(location.pathname === '/dashboard/cars');
    }, [location.pathname])

    return (
        <div className="sidebar">
            <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link as={Link} to="/dashboard" className={isHomeActive ? 'active' : ''} onClick={handleHomeClick}>
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard/cars" className={`mt-4 ${isCarsActive ? 'active' : ''}`} onClick={handleCarsClick}>
                    Cars
                </Nav.Link>
            </Nav>
            <Button variant="danger" className="mt-auto" onClick={handleLogoutClick}>
                Logout
            </Button>
        </div>
    );
}

export default SideBar;
