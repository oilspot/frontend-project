import './create-videos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import VideoActor from '../video-actor/VideoActor';
import VideoVoice from '../video-voice/VideoVoice';
import VideoAlignment from '../video-alignment/VideoAlignment';
import VideoBackground from '../video-background/Video-Background';

/**
 * 
 * CreateVideos component returns the necessary content to build a new video project,
 * and has some children components. It has its own stylesheet.
 */

export default function CreateVideos() {
    return (
        <div>
            <div className="d-flex flex-wrap justify-content-between col-sm-10 mb-3">

                    <div><h1>Title demo <FontAwesomeIcon icon={faChevronDown}  className={'create-dropdown'} /></h1></div>
                    <div className="align-self-end">
                        <button className="btn-grey mx-2">Cancel</button>
                        <button className="btn-green">Save</button>
                        </div>

            </div>
            <hr />
            <div className="boxes d-flex row">

                <div className="video-create my-2 col-sm-10 col-md-6 col-xl-6">
                    <div className="video-create-img">
                        <div className="video-create-preview-btn d-flex justify-content-center">
                            <button className="btn-white">Preview</button>
                        </div>
                    </div>
                    <div className="text-center textarea-container">
                        <textarea defaultValue="Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages.">
                        </textarea>
                        <button className="btn">Listen</button>
                    </div>
                </div>

                <div className="video-feature my-2 col-sm-10 col-md-4 col-xl-4">
                    <div className="">
                        <p>Actor Voice Alignment Background</p>
                    </div>

{/*
    Children components which need to be shown one at a time when the user clicks on the voice menu above.
    Work in progress.

*/}

                    <div><VideoActor /></div>
                    <div><VideoVoice /></div>
                    <div><VideoAlignment /></div>
                    <div><VideoBackground /></div>
                    
                </div>


            </div>
        </div>
    )
}