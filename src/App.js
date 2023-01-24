import './App.css';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <div className='flex flex-col min-h-screen justify-between'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
