import { Outlet, useNavigate } from "react-router-dom";
import CustomNavbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect } from "react";


const DashboardHome = () => {

  const username = 'Nurul Mustofa';
  const avatar = 'https://avatars.githubusercontent.com/u/66587167?v=4';

  const [auth] = useLocalStorage('auth', {});
  const navigate = useNavigate();

  // setelah component dashboard di load barulah navigate jalan
  useEffect(() => {
    if(!auth.token) {
      return navigate('/');
    }
  })

  return (
    <div className="d-flex vh-100">
      <SideBar />
      <div className="ms-1 flex-grow-1">
        <div className="p-3">
          <CustomNavbar username={username} avatar={avatar}/>
          <Outlet />
        </div>
      </div>
    </div>

  )
}
  
export default DashboardHome;