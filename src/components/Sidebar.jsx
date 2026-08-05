import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

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
        <div className=''>
            <div className='flex   '>

                {/* sidebar */}

                <div className='bg-[#282a3c] w-[70px] h-[1200px] hidden md:block md:pt-2'>

                    <button className="text-[20px] bg-blue h-[40px] ml-[-13px] text-[#883CE8] text-center  border-none cursor-pointer px-[35px] py-[15px] rounded-[10px] w-[40px]" onClick={open}>|||</button>
                    <div className='mt-[12px] flex flex-col ml-[2px] pt-1'>
                        <img className='pt-[10px] cursor-pointer' onClick={handleHome} src="/src/assets/home-removebg-preview.png" alt="" width={50} />
                        <img onClick={handleStudent} className='pt-[10px] cursor-pointer' src="/src/assets/student-removebg-preview.png" alt="" width={50} />
                        <img onClick={handlePost} className='pt-[10px] cursor-pointer' src="/src/assets/images-removebg-preview.png" alt="" width={50} />
                    </div>
                </div>


                {isOpen &&
                    <div className="h-[1200px] md:w-[75px] bg-[#282a3c] pl-0 pt-0 text-start">
                        <ul className=' flex-col text-[20px] md:ml-0  '>
                            <button className='cursor-pointer bg-transparent text-[#7c5cc4] pb-[20px] ml-[50px] text-[35px] h-[40px] mt-[10px]' onClick={close}>x</button>

                            <li className='mt-[22px]  md:pr-10 md:pt-2'><Link className='text-white  no-underline font-bolder' to="/">Home</Link></li>


                            <li className='mt-[30px] pt-0'><Link className='text-white  no-underline font-bolder' to="/about">Student</Link> </li>


                            <li className='mt-[33px] pt-0'><Link className='text-white  no-underline font-bolder' to="/posts"> Post</Link></li>

                        </ul>




                    </div>}
            </div>
        </div>
    )
}
