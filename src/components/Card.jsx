import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Card = ({ data }) => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)

    function open() {
        setIsOpen(true)
    }
    function close() {
        setIsOpen(false)
    }
    function handleAbout() {
        navigate("/about")
    }
    function handleContact() {
        navigate("/posts")
    }
    return (
        <>
            {/* <div className='combine'> */}
            {/* sidebar */}

            {/* <div className='sideOpen'>
                    <button class="menu-btn" id="menuBtn" onClick={open}><img src="/src/assets/lines-removebg-preview.png" alt="lines" width={50} /></button>
                    <div className='sideIcon'>
                        <img className='sideImage1' src="/src/assets/home-removebg-preview.png" alt="" width={50} />
                        <img className='sideImage' onClick={handleAbout} src="/src/assets/student-removebg-preview.png" alt="" width={50} />
                        <img className='sideImage' onClick={handleContact} src="/src/assets/images-removebg-preview.png" alt="" width={50} />
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



                    </div>} */}

            <div className='flex flex-wrap w-full'>


                {/* card-1 */}
                <div className='mt-[40px] ml-[20px] w-[45%] h-[280px] bg-[rgba(255, 255, 255, 0.712)]    shadow-[0_15px_10px_rgba(0,0,0,0.15)]'>
                    <div className=' bg-gradient-to-r from-[#875df4] to-[#892be2] w-full h-[70px]'>
                        <h3 className='pl-[10px]'>CS - Total Atendance of Students</h3>
                    </div>
                    <h1 className='text-[30px] text-start text-amber-700 ml-[30px] mt-[40px]'> Total Students:   {data}</h1>
                </div>
                {/* card-2 */}
                <div className='mt-[40px] ml-[25px] w-[45%] h-[280px] bg-[ rgba(255, 255, 255, 0.712)] shadow-[0_15px_10px_rgba(0,0,0,0.15)] '>
                    <div className=' bg-gradient-to-r from-[#875df4] to-[#892be2] w-full h-[70px]'>
                   
                        <h3 className='pl-[10px]'> CS - Total Active Students</h3>
                    </div>
                    <h1 className='font-[30px] text-start text-green-800 ml-[30px] mt-[40px] '>Active Student:   158</h1>
                </div>
                <div className='mt-[40px] ml-[20px] w-[45%] h-[280px] bg-[rgba(255, 255, 255, 0.712)]    shadow-[0_15px_10px_rgba(0,0,0,0.15)]'>
                    <div className='bg-gradient-to-r from-[#875df4] to-[#892be2] w-full h-[70px]'>
                        <h3 className='pl-[10px]'>CS - Total Un-Active Students</h3>
                    </div>
                    <h1 className='font-[30px] text-start text-green-800 ml-[30px] mt-[40px]'>Absent Student:50</h1>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}


