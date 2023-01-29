import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PageNotFound from './pages/PageNotFound';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import UserPage from './pages/UserPage';

function App() {
    return (
        <Router>
            <main className='flex min-h-screen flex-col justify-between'>
                <Navbar />
                <section className='container mx-auto p-2 flex-1 flex flex-col'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/user/:login' element={<UserPage />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </section>
                <Footer />
            </main>
        </Router>
    );
}

export default App;
