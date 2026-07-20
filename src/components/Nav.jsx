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
        setuser(username)
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



    return (
        <div>


            <nav className='navbar'>


                <h2>LMS   <span>Learning Management System</span></h2>
                <ThemeToggle />
                <div className='waleed'>
                    <p className='imli'>{user}</p>
                    <img className='profile' src="/src/assets/profileIcon.webp" alt="" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} />
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li className='proof' onClick={handleProfile}>Profile</li>

                            <li className='list'>Settings</li>
                            <li className='list' onClick={handleLogOut}>Logout</li>


                        </ul>
                    )}
                </div>

            </nav>
        </div>
    )
}
export default Nav

