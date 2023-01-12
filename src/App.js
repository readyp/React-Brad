import './App.css';
import Navbar from './components/layouts/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/layouts/Footer';
import HomePage from './components/layouts/pages/HomePage';
import AboutPage from './components/layouts/pages/AboutPage';
import NotFoundPage from './components/layouts/pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col justify-between'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
