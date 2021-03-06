import './profile-header.css';
import { Link } from 'react-router-dom';

/**
 * 
 * Profile Header component is a personal navbar, visible to users when logged in in their personal area. 
 * It contains the logout option (front end demo only) and a user menu. 
 * This component has its own stylesheet.
 */

export default function ProfileHeader() {
    return (
        <div>
            <div className="d-flex flex-wrap justify-content-between col-sm-10 mb-3">

                <div><h1>My Account</h1></div>
                <div className="align-self-end mx-3">
                    <span className="logout">Logout</span>
                </div>
            </div>
            
            <hr />

            <div className="d-flex row">
                <ul className="profile-menu">
                    <li><Link to={'/profile'}>Profile</Link></li>
                    <li><Link to={'/profile/plans'}>My Plan</Link></li>
                    <li><Link to={'/profile/billing'}>Billing</Link></li>
                </ul>
            </div>
        </div>
    )
}