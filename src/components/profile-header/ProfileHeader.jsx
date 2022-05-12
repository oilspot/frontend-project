import './profile-header.css';
import { Link } from 'react-router-dom';

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