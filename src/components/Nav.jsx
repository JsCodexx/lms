import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contextApi/Context'
import { ThemeToggle } from './ThemeToggle'

function Nav() {

    const theme = useContext(UserContext)
    console.log("theme", theme)

    return (
        <div>

            <nav className='navbar'>


                <h2>LMS   <span>Learning Management System</span></h2>


                <ThemeToggle />





            </nav>
        </div>
    )
}

export default Nav

