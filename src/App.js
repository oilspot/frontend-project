import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CreateVideos from './components/create-videos/CreateVideos';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import NotFound from './components/not-found/NotFound';
import Profile from './components/profile/Profile';
import Register from './components/register/Register';
import SavedVideos from './components/saved-videos/SavedVideos';

function App() {
  return (
    <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Layout />} />
          <Route path="/saved" element={<SavedVideos />} />
          <Route path="/create" element={<CreateVideos />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/register" element={<Register />} />

          <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
