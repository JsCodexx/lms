import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'


function About() {
    return (
        <div>
            <Nav />
            <div className='sideBar'>
                <ul>
                    <li><Link className='active' to="/">Home</Link></li>
                    <li><Link className='active' to="/about">Students</Link> </li>
                    <li><Link className='active' to="/contact"> Profile</Link></li>
                </ul>
            </div>
       

        </div>
    )
}

export default About
