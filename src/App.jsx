import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About.jsx';
// import Contact from './pages/Contact.jsx';
import { ThemeProvider } from './contextApi/Context';
import { ThemeToggle } from './components/ThemeToggle';
import Login from './pages/Login';
import ProtectedRoutes from './utils/ProtectedRoute.jsx';
import { useEffect, useState } from 'react';
import Singleuser from './pages/Singleuser.jsx';
import Wrapper from './components/Wrapper.jsx';
import Post from './pages/Post.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

  }, []);




  return (
    <ThemeProvider>
      <BrowserRouter>
       
        <Routes>

          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
          />


          <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
            <Route path="/" element={<Home />} />
            <Route path="/singleuser/:id" element={<Singleuser />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Post />} />
            {/* <Route path="/contact/:id" element={<Contact />} /> */}
          </Route>

          <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  ); s
}

export default App;
