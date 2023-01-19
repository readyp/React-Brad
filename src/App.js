import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GithubFinderProvider } from './context/GithubFinderContext';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GithubFinderProvider>
        <Router>
          <div className='flex flex-col justify-between min-h-screen'>
            <Navbar />
            <Container>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/*' element={<PageNotFound />} />
              </Routes>
            </Container>
            <Footer />
          </div>
        </Router>
      </GithubFinderProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
