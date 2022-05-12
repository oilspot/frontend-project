import './video-actor.css';

/**
 * 
 * VideoActor is a child component of CreateVideo component.
 * It lists some setting options (front end demo only) and it has its own stylesheet.
 * 
 */

export default function VideoActor() {
    return (
        <>
            <h4>Video actor</h4>
            <div className="d-flex flex-wrap text-center">
                <div className="video-actor anna-actor col-md-3 mb-4">
                    <p className="video-actor-name">Anna</p>
                </div>
    
                <div className="video-actor-sel yoyo-actor col-md-3 mb-4">
                    <p className="video-actor-name">Yoyo</p>
                </div>
    
                <div className="video-actor skye-actor col-md-3 mb-4">
                    <p className="video-actor-name">Skye</p>
                </div>
    
                <div className="video-actor michelle-actor col-md-3 mb-4">
                    <p className="video-actor-name">Michelle</p>
                </div>
    
                <div className="video-actor vincent-actor col-md-3 mb-4">
                    <p className="video-actor-name">Vincent</p>
                </div>
    
                <div className="video-actor katia-actor col-md-3 mb-4">
                    <p className="video-actor-name">Katia</p>
                </div>
    
                <div className="video-actor may-actor col-md-3 mb-4">
                    <p className="video-actor-name">May</p>
                </div>
            </div>

        </>
    )
}