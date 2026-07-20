import React, { use, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contextApi/Context'
import { ThemeToggle } from './ThemeToggle'

function Nav() {
    const [user, setuser] = useState()

    const theme = useContext(UserContext)
    console.log("theme", theme)

    const activeUser = localStorage.getItem("token");
    if (activeUser) {
        try {
            const userObject = JSON.parse(activeUser);
            const username = userObject.username
            console.log(username)
            useEffect(() => {
                setuser(username)
            })

        } catch (error) {

        }

    }
    return (
        <div>


            <nav className='navbar'>


                <h2>LMS   <span>Learning Management System</span></h2>


                <ThemeToggle />
                <div className='waleed'>
                    <p>{user}</p>
                    <img className='profile' src="/src/assets/profileIcon.webp" alt="profile" />
                </div>






            </nav>
        </div>
    )
}
export default Nav

