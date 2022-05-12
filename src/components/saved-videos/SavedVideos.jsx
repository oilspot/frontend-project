import './saved-videos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"


export default function SavedVideos() {
    return (
        <div className="col-md-12">
            <div className="d-flex justify-content-between col-sm-10 mb-3">

                    <div><h1>Saved videos</h1></div>
                    <div className="align-self-end"><button className="btn-green">Create new</button></div>

            </div>
            <hr />
            <div className="video-card m-2 col-sm-4 col-md-10 col-xl-4">
                <div className="video-card-img">
                    <div className="d-flex justify-content-end">
                        <FontAwesomeIcon icon={faEllipsis}  className={'nav-card'} />
                    </div>
                </div>
                <div className="video-card-text text-center">
                    <p>Title demo</p>
                    <span>Email</span> <span>Marketing</span> 
                </div>
            </div>
        </div>
    )
}