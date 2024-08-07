import { FaUserCircle } from "react-icons/fa";
import '../styles/header.css';
import { SiIrobot } from "react-icons/si";

function Header(){
    return(
        <>
        <div className="header-navbar">
           <div className="logo-container">
           <SiIrobot />
           </div>
           <div className="profile-container">
                <FaUserCircle />
                <span>Sankar</span>
           </div>
        </div>
        </>
    );
}

export default Header;