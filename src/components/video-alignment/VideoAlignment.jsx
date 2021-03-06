import './video-alignment.css';

/**
 * 
 * VideoAlignment is a child component of CreateVideo component.
 * It lists the buttons to set position options (front end demo only) and it has its own stylesheet.
 * 
 */

export default function VideoAlignment() {
    return (
        <>
            <h4>Video alignment</h4>
            <div>
                <button className="btn-video">Left</button>
                <button className="btn-video-sel">Center</button>
                <button className="btn-video">Right</button>
            </div>
        </>
    )
}