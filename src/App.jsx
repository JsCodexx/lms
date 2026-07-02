import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { ThemeProvider } from './contextApi/Context';
import { ThemeToggle } from './components/ThemeToggle';

function App() {



  return (
    <>
      <ThemeProvider>
        {/* <ThemeToggle /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </BrowserRouter>
      </ThemeProvider>

    </>
  )
}
export default App
