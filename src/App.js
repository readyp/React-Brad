import './App.css';
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ProfileProvider } from './contexts/ProfileContext';

function App() {
    return (
        <ProfileProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </Router>
        </ProfileProvider>
    );
}

export default App;
