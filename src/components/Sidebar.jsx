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
                <button className="text-[20px] bg-blue h-[40px] ml-[10px] text-[#883CE8] text-center  border-none cursor-pointer px-[35px] py-[15px] rounded-[10px] w-[40px]" onClick={open}>|||</button>
                <div className='mt-[12px] flex flex-col ml-[25px]'>
                    <img className='pt-[10px] cursor-pointer' onClick={handleHome} src="/src/assets/home-removebg-preview.png" alt="" width={50} />
                    <img onClick={handleStudent} className='pt-[10px] cursor-pointer' src="/src/assets/student-removebg-preview.png" alt="" width={50} />
                    <img onClick={handlePost} className='pt-[10px] cursor-pointer' src="/src/assets/images-removebg-preview.png" alt="" width={50} />
                </div>
            </div>
            {isOpen &&
                <div className="h-[807px] bg-[#282a3c] text-start">

                    <ul className=' flex-col text-[25px] '>
                        <button className='cursor-pointer bg-transparent text-[#7c5cc4] pb-[20px] ml-[50px] text-[35px] h-[40px] mt-[10px]' onClick={close}>x</button>
                        <li className='mt-[16px] pr-10'><Link className='text-white  no-underline font-bolder' to="/">Home</Link></li>
                        <li className='mt-[20px] pt-0'><Link className='text-white  no-underline font-bolder' to="/about">Student</Link> </li>
                        <li className='mt-[24px] pt-0'><Link className='text-white  no-underline font-bolder' to="/posts"> Post</Link></li>
                    </ul>



                </div>}
        </div>
    )
}
