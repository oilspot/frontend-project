import './create-videos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


export default function CreateVideos() {
    return (
        <div>
            <div className="d-flex flex-wrap justify-content-between col-sm-10 mb-3">

                    <div><h1>Title demo <FontAwesomeIcon icon={faChevronDown}  className={'create-dropdown'} /></h1></div>
                    <div className="align-self-end">
                        <span className="btn mx-2">Cancel</span>
                        <span className="btn btn-success">Save</span>
                        </div>

            </div>
            <hr />
            <div className="boxes">
                <div className="video-create m-2 col-sm-10 col-md-10 col-xl-6">
                    <div className="video-create-img">
                        <div className="video-create-preview-btn d-flex justify-content-center">
                            <button className="btn btn-primary">Preview</button>
                        </div>
                    </div>
                    <div className="text-center textarea-container">
                        <textarea defaultValue="Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages.">
                        </textarea>
                        <button className="btn">Listen</button>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}