import { Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Billing from './components/billing/Billing';
import CreateVideos from './components/create-videos/CreateVideos';
import Login from './components/login/Login';

import Navbar from './components/navbar/Navbar';
import NotFound from './components/not-found/NotFound';
import Plans from './components/plans/Plans';
import Profile from './components/profile/Profile';
import Register from './components/register/Register';
import SavedVideos from './components/saved-videos/SavedVideos';
import VideoActor from './components/video-actor/VideoActor';
import VideoAlignment from './components/video-alignment/VideoAlignment';
import VideoBackground from './components/video-background/Video-Background';
import VideoVoice from './components/video-voice/VideoVoice';

/**
 * Following: returning the App structure and routing all the components
 * 
 * Components as Login, Register, SavedVideos, NotFound are an indipendent route
 * 
 * Each child component is listed under its parent's route: 
 * e.g. CreateVideos and Profile have children components, and their url will be /create/child-component or /profile/child-component
*/

function App() {

    return (
      <>
      <div className="d-flex row m-0 justify-content-end">
        <div>
          <Navbar /> 
        </div>
        <div className="col-md-11">
                <div>
                    <Routes>
                
                      <Route path="/" element={ <Login /> } />
                      <Route path="/register" element={ <Register /> } />
                      <Route path="/saved" element={ <SavedVideos /> } />

                      <Route path="/create" element={ <Outlet /> }>
                        <Route index element={<CreateVideos />} />
                        <Route path="actor" element={<VideoActor />} />
                        <Route path="voice" element={<VideoVoice />} />
                        <Route path="alignment" element={<VideoAlignment />} />
                        <Route path="background" element={<VideoBackground />} />
                        
                      </Route>

                      <Route path="/profile" element={ <Outlet /> }>
                        <Route index element={<Profile />} />
                        <Route path="billing" element={ <Billing /> } />
                        <Route path="plans" element={ <Plans /> } />
                      </Route> 

                      <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
        </div>
    </div>;
      
      
      </>
    )

}

export default App;
