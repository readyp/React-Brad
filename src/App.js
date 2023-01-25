import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { ProfileProvider } from './contexts/ProfileContext';
import { AlertProvider } from './contexts/AlertContext';

function App() {
    return (
        <ProfileProvider>
            <AlertProvider>
                <Router>
                    <div className='flex flex-col min-h-screen justify-between'>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                        </Routes>
                        <Footer />
                    </div>
                </Router>
            </AlertProvider>
        </ProfileProvider>
    );
}

export default App;
