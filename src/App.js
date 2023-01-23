import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './components/layouts/Navbar';
import { GithubProvider } from './contexts/github/GithubContext';

function App() {
  return (
    <GithubProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </GithubProvider>
  );
}

export default App;
