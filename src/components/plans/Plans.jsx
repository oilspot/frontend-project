import './plans.css';
import ProfileHeader from "../profile-header/ProfileHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';


export default function Plans() {
    return (
        <>
        <div>
            <ProfileHeader />
        </div>
         <div className="plan-cards d-flex flex-wrap">
            
            <div className="col-md-5 col-xl-2 me-4 align-self-end">
                <h4>Free</h4>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck}  className={'check-icon'} /> Nam laoreet diam non pulvinar fringilla.</li>
                    <li><FontAwesomeIcon icon={faXmark}  className={'check-icon'} /> Nunc ornare lacus sit amet nisi.</li>
                    <li><FontAwesomeIcon icon={faXmark}  className={'check-icon'} /> Ut laoreet orci ad ultricies.</li>
                    <li><FontAwesomeIcon icon={faXmark}  className={'check-icon'} /> Nam laoreet diam non fringilla.</li>
                    <li><FontAwesomeIcon icon={faXmark}  className={'check-icon'} /> Cras et tellus finibus, turpis.</li>
                </ul>
                <span>$</span><span className="amount">0</span>
                <button>Downgrade</button>
            </div>

            <div className="col-md-5 col-xl-2 me-4 align-self-end">
                <h4>Pro</h4>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck}  className={'check-icon'} /> Nam laoreet diam non pulvinar fringilla.</li>
                    <li><FontAwesomeIcon icon={faCheck}  className={'check-icon'} /> Nunc ornare lacus sit amet nisi.</li>
                    <li><FontAwesomeIcon icon={faXmark}  className={'check-icon'} /> Ut laoreet orci ad ultricies.</li>
                    <li><FontAwesomeIcon icon={faXmark}  className={'check-icon'} /> Nam laoreet diam non fringilla.</li>
                    <li><FontAwesomeIcon icon={faXmark}  className={'check-icon'} /> Cras et tellus finibus, euismod.</li>
                </ul>
                <span>$</span><span className="amount">12</span>
                <button>Downgrade</button>
            </div>

            <div className="plan-card-current col-md-5 col-xl-2 me-5 align-self-end">
                <h4>Team</h4>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck}  className={'check-icon'} /> Nam laoreet diam non pulvinar fringilla.</li>
                    <li><FontAwesomeIcon icon={faCheck}  className={'check-icon'} /> Nunc ornare lacus sit amet nisi.</li>
                    <li><FontAwesomeIcon icon={faXmark}  className={'check-icon'} /> Ut laoreet orci ad ultricies.</li>
                    <li><FontAwesomeIcon icon={faCheck}  className={'check-icon'} /> Nam laoreet diam non fringilla.</li>
                    <li><FontAwesomeIcon icon={faXmark}  className={'check-icon'} /> Cras et tellus finibus, euismod.</li>
                </ul>
                <span>$</span><span className="amount">23</span>
                <button>Current plan</button>
            </div>

            <div className="col-md-5 col-xl-2 align-self-end">
                <h4>Agency</h4>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck}  className={'check-icon'} /> Nam laoreet diam non pulvinar fringilla.</li>
                    <li><FontAwesomeIcon icon={faCheck}  className={'check-icon'} /> Nunc ornare lacus sit amet nisi.</li>
                    <li><FontAwesomeIcon icon={faCheck}  className={'check-icon'} /> Ut laoreet orci ad ultricies.</li>
                    <li><FontAwesomeIcon icon={faCheck}  className={'check-icon'} /> Nam laoreet diam non fringilla.</li>
                    <li><FontAwesomeIcon icon={faCheck}  className={'check-icon'} /> Cras et tellus finibus, euismod.</li>
                </ul>
                <span>$</span><span className="amount">43</span>
                <button>Upgrade</button>
            </div>

        </div>
    </>
    )
}