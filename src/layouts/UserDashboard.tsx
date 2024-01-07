import { useState, useEffect } from "react";
import CustomNavbar from "../components/NavBar";
import DisplayCars from "../pages/userDashboard/DisplayCars";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const UserDashboard = () => {

  const navigate = useNavigate();
  const [googleUserData, setGoogleUserData] = useState<{ picture: string; given_name: string } | undefined>(undefined);
  
  useEffect(() => {
    const storedGoogleUserData = localStorage.getItem('googleUserData');

    if(storedGoogleUserData) {
      setGoogleUserData(JSON.parse(storedGoogleUserData));
    } else {
      navigate('/login');
    }
  }, [navigate])


  const handleLogout = () => {
    localStorage.removeItem('googleUserData');

    navigate('/login');
  }


  return (

    <div className="d-flex vh-100">
      <div className="ms-1 flex-grow-1">
        <div className="p-3">
          <CustomNavbar googleUserData={googleUserData}/>
          <Button style={{ marginLeft: '80px' }} variant="danger" onClick={handleLogout}>Logout</Button>
          {/* <Outlet /> */}
          <DisplayCars />
        </div>
      </div>
    </div>

  )
}
  
export default UserDashboard;