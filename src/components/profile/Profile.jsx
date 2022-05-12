import './profile.css';
import ProfileHeader from '../profile-header/ProfileHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import userphoto from './img/user-photo.jpg';

/**
 * 
 * Profile component returns the main user settings, allowing the change of credentials (front end demo only).
 * It has its own stylesheet and a child component, ProfileHeader, which contains the profile menu. 
 *  
 */

export default function Profile() {
    return (
        <>
            <div>
                <ProfileHeader />
            </div>


             <div className="d-flex">
                 <div className="">
                    <img src={userphoto} alt={'User'} id={'userphoto'} className="mx-3 my-4"/> <FontAwesomeIcon icon={faEdit}  className={'profile-edit'} />
                </div>
               
             </div>

             <div className="d-flex flex-wrap w-75">
                 <div className="col-sm-10 col-md-4 mx-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Enter your name" defaultValue="John" required></input>
                 </div>
                 <div className="col-sm-10 col-md-4 mx-4">
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" name="lastname" placeholder="Enter your lastname" defaultValue="Doe" required></input>
                 </div>
                 <div className="col-sm-10 col-md-4 mx-4">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="Enter your email" defaultValue="john.doe@email.com" required></input>
                 </div>
                 
             </div>
             <button className="btn-green m-4">Save changes</button>
        </>
    )
}