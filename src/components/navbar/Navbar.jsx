import './navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faVideo } from '@fortawesome/free-solid-svg-icons';
import logo from './img/logo.png';
import profile from './img/profile.png';


const navbarItems = [
    {   
        display: 'Create Video',
        icon: <FontAwesomeIcon icon={faVideo}  className={'nav-icon'} />,
        to: "/create",
        section: "create"
    },
    {   
        display: 'Saved Videos',
        icon: <FontAwesomeIcon icon={faDisplay} className={'nav-icon'} />,
        to: "/saved",
        section: "saved"
    }
]

const Navbar = () => {

    return (
        <div className="navbar flex-coloumn justify-content-center align-content-between m-0">
            <div className="logo row col-sm-12">
                <Link to={"/"}><img src={logo} alt={'Logo'} id={'logo'} /></Link>
            </div>
            <div className="menu row col-sm-12">
                {
                    navbarItems.map((item, index) => (
                        <Link to={item.to} key={index}>
                            <div>
                                {item.icon}
                            </div>
                        </Link>
                    ))
                } 
            </div>
            
            <div className="row col-sm-12">
                <Link to="/profile">
                    <img src={profile} alt={'Profile'} id={'profile'}/>
                </Link>
            </div>

        </div>
    )
};

export default Navbar;