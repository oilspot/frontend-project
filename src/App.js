import logo from './logo.svg';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import NotFound from './components/not-found/NotFound';

function App() {
  return (
    <Routes>
          <Route path="/" element={<Login />} />

          <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
