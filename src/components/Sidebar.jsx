import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    function open() {
        setIsOpen(true)
    }
    function close() {
        setIsOpen(false)
    }
    function handleStudent() {
        navigate("/about")
    }
    function handlePost() {
        navigate("/posts")
    }
    function handleHome() {
        navigate("/")
    }
    return (
        <div className='box'>
            {/* sidebar */}

            <div className='sideOpen'>
                <button class="menu-btn" id="menuBtn" onClick={open}><img src="/src/assets/lines-removebg-preview.png" alt="lines" width={50} /></button>
                <div className='sideIcon'>
                    <img className='sideImage' onClick={handleHome} src="/src/assets/home-removebg-preview.png" alt="" width={50} />
                    <img onClick={handleStudent} className='sideImage' src="/src/assets/student-removebg-preview.png" alt="" width={50} />
                    <img onClick={handlePost} className='sideImage' src="/src/assets/images-removebg-preview.png" alt="" width={50} />
                </div>
            </div>
            {isOpen &&
                <div className="sidebar">

                    <ul className='menu-links'>
                        <button class="close-btn" id="closeBtn" onClick={close}>x</button>
                        <li className='love'><Link className='active' to="/">Home</Link></li>
                        <li className='love'><Link className='active' to="/about">Student</Link> </li>
                        <li className='love'><Link className='active' to="/posts"> Post</Link></li>
                    </ul>



                </div>}
        </div>
    )
}
