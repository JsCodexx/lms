import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ data }) => {

    return (
        <div className='card-container'>

            {/* sidebar */}
            <div className='sideBar'>
                <ul>
                    <li><Link className='active' to="/">Home</Link></li>
                    <li><Link className='active' to="/about">Students</Link> </li>
                    {/* <li><Link className='active' to="/contact:id"> Post</Link></li> */}
                    <li><Link className='active' to="/posts"> Post</Link></li>
                </ul>
            </div>
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
    )
}


