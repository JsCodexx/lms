import React, { use, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contextApi/Context'
import { ThemeToggle } from './ThemeToggle'
import { useRef, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { useState } from 'react'

function Nav() {

    const [user, setuser] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [Open, setOpen] = useState(false)
    const [students, setStudents] = useState()
    const navigate = useNavigate()
    // const { id } = useParams()
    const dropdownRef = useRef(null)
    const theme = useContext(UserContext)
    console.log("theme", theme)

    const activeUser = localStorage.getItem("username");
    console.log(activeUser, "activeusers")


    // const userObject = (activeUser);
    // const username = userObject.username
    // console.log(username)
    useEffect(() => {
        setuser(activeUser)
    })

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        function handleEscape(event) {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])

    function handleLogOut() {
        const logout = localStorage.removeItem("token")
        navigate("/login")


    }



    function handleProfile() {
        navigate(`/singleuser/1`)
    }
    function open() {
        setOpen(true)
    }
    function close() {
        setOpen(false)
    }


    return (
        <div>
            <nav className='navbar'>

                <div className='top'>
                    <img className='lahore' src='/src/assets/lms-removebg-preview.png' width={100} />
                    <span>Learning Management System</span>
                </div>
                <button class="menu-btn-1"  onClick={open}><img src="/src/assets/lines-removebg-preview.png" alt="lines" width={50} /></button>
                <ThemeToggle />
                <div className='waleed'>
                    <div className='two'>
                        <p className='imli'>{user} neil bung</p>
                        <p className='imli2'>(bc260213343)</p>
                    </div>
                    <img className='profile' src="/src/assets/profileIcon.webp" alt="" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} />
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li className='proof' onClick={handleProfile}>Profile</li>

                            <li className='list'>Settings</li>
                            <li className='list' onClick={handleLogOut}>Logout</li>


                        </ul>
                    )}
                    <div className='one'>
                        {Open &&
                            <div className="sidebar">

                                <ul className='menu-links'>
                                    <button class="close-btn" id="closeBtn" onClick={close}>x</button>
                                    <li className='love'><Link className='active' to="/">Home</Link></li>
                                    <li className='love'><Link className='active' to="/about">Student</Link> </li>
                                    <li className='love'><Link className='active' to="/posts"> Post</Link></li>
                                </ul>



                            </div>}
                    </div>

                </div>

            </nav>
        </div>
    )
}
export default Nav

