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
        <div className='flex'>
            {/* sidebar */}

            <div className='bg-[#282a3c] w-[100px] h-[807px]'>
                <button class="menu-btn" id="menuBtn" onClick={open}><img src="/src/assets/lines-removebg-preview.png" alt="lines" width={50} /></button>
                <div className='mt-[12px] flex flex-col ml-[25px]'>
                    <img className='pt-[10px] cursor-pointer' onClick={handleHome} src="/src/assets/home-removebg-preview.png" alt="" width={50} />
                    <img onClick={handleStudent} className='pt-[10px] cursor-pointer' src="/src/assets/student-removebg-preview.png" alt="" width={50} />
                    <img onClick={handlePost} className='pt-[10px] cursor-pointer' src="/src/assets/images-removebg-preview.png" alt="" width={50} />
                </div>
            </div>
            {isOpen &&
                <div className="w-[202px] h-[807px] bg-[#282a3c] text-start">

                    <ul className='menu-links'>
                        <button class="close-btn" id="closeBtn" onClick={close}>x</button>
                        <li className='mt-[5px]'><Link className='text-white  no-underline font-bolder' to="/">Home</Link></li>
                        <li className='mt-[5px]'><Link className='text-white  no-underline font-bolder' to="/about">Student</Link> </li>
                        <li className='mt-[5px]'><Link className='text-white  no-underline font-bolder' to="/posts"> Post</Link></li>
                    </ul>



                </div>}
        </div>
    )
}
