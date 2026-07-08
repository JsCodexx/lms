import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import { ThemeProvider } from './contextApi/Context';
import { ThemeToggle } from './components/ThemeToggle';
import Login from './pages/Login';
import ProtectedRoutes from './utils/ProtectedRoute.jsx';
import { useEffect, useState } from 'react';
import Singleuser from './pages/Singleuser.jsx';



function App() {


  // const [user, setUser] = useState(null)

  // console.log(user,"user")
  // useEffect(() => {
  //   setUser()
  // }, [user])


  return (
    <>

      <ThemeProvider>

        <BrowserRouter>
          <Routes>



            <Route path='/login' element={<Login />} />

            <Route element={<ProtectedRoutes  />}>
              <Route path="/" element={
                <Home />
              } />
              <Route path="/singleuser" element={<Singleuser />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

          </Routes>

        </BrowserRouter>
      </ThemeProvider>


    </>
  )
}
export default App
