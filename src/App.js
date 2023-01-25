import './App.css';
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ProfileProvider } from './contexts/ProfileContext';
import { AlertProvider } from './contexts/AlertContext';

function App() {
    return (
        <ProfileProvider>
            <AlertProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                    </Routes>
                </Router>
            </AlertProvider>
        </ProfileProvider>
    );
}

export default App;
