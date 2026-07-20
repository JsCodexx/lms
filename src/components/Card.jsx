import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Card = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)

    function open() {
        setIsOpen(true)
    }
    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <div className='combine'>
                {/* sidebar */}


                <div className='sideOpen'>
                    <button class="menu-btn" id="menuBtn" onClick={open}><img src="/src/assets/lines-removebg-preview.png" alt="lines" width={50} /></button>
                    <div className='sideIcon'>
                        <img className='sideImage' src="/src/assets/home-removebg-preview.png" alt="" width={50} />
                        <img className='sideImage' src="/src/assets/student-removebg-preview.png" alt="" width={50} />
                        <img className='sideImage' src="/src/assets/images-removebg-preview.png" alt="" width={50} />
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
                        {/* <div class="overlay" id="overlay" onClick={close}></div> */}
                    </div>}

                <div className='card-container'>


                    {/* card-1 */}
                    <div className='card'>
                        <div className='miniCard'>
                            <h3 className='heading'>CS - Total Atendance of Students</h3>
                        </div>
                        <h1 className='calculate'> Total Students:   {data}</h1>
                    </div>
                    {/* card-2 */}
                    <div className='card-2'>
                        <div className='miniCard'>
                            <h3 className='heading'> CS - Active Students</h3>
                        </div>
                        <h1 className='activeStudents'>Active Student:   158</h1>
                    </div>
                    <div className='card-3'>
                        <div className='miniCard'>
                            <h3 className='heading'>CS - Un-Active Students</h3>
                        </div>
                        <h1 className='absentStudents'>Absent Student:50</h1>
                    </div>
                </div>
            </div>
        </>
    )
}


