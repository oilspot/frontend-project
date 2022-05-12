export default function VideoVoice() {

    /**
     * 
     * VideoVoice is a child component of CreateVideo component.
     * It lists some players to choose the voice settings (front end demo only).
     * 
     */

    return (
        <>
            <h4>Voice</h4>
            <div>
                <p>Asian</p>
                <audio controls>
                    <source src="#" type="audio/mpeg" />
                </audio>    
            </div>

            <div>
                <p>British</p>
                <audio controls>
                    <source src="#" type="audio/mpeg" />
                </audio>    
            </div>

            <div>
                <p>American</p>
                <audio controls>
                    <source src="#" type="audio/mpeg" />
                </audio>    
            </div>
        </>
    )
}