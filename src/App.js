import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

function App() {
    return (
        <Router>
            <div className='flex flex-col min-h-screen justify-between'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
