import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CreateVideos from './components/create-videos/CreateVideos';
import Login from './components/login/Login';

import Navbar from './components/navbar/Navbar';
import NotFound from './components/not-found/NotFound';
import Profile from './components/profile/Profile';
import Register from './components/register/Register';
import SavedVideos from './components/saved-videos/SavedVideos';


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
                      <Route path="/saved" element={ <SavedVideos /> } />
                      <Route path="/create" element={ <CreateVideos /> } />
                      <Route path="/profile" element={ <Profile /> } />
                      <Route path="/register" element={ <Register /> } />

                    </Routes>
                </div>
        </div>
    </div>;
      
      
      </>
    )

}

export default App;
