import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PageNotFound from './pages/PageNotFound';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { GithubProvider } from './context/github/GithubContext';

function App() {
    return (
        <GithubProvider>
            <Router>
                <main className='flex min-h-screen flex-col justify-between'>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </main>
            </Router>
        </GithubProvider>
    );
}

export default App;
