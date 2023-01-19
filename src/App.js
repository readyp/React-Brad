import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './layout/Navbar';
import AboutPage from './pages/AboutPage';
import PageNotFound from './pages/PageNotFound';
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
