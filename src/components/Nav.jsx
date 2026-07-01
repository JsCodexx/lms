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
                <ul>
                    <li><Link className='active' to="/">Home</Link></li>
                    <li><Link className='active' to="/about">About</Link> </li>
                    <li><Link className='active' to="/contact">Contact</Link></li>
                </ul>

                <ThemeToggle />





            </nav>
        </div>
    )
}

export default Nav

