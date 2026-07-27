import React, { use, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contextApi/Context'
import { ThemeToggle } from './ThemeToggle'
import { useRef, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { useState } from 'react'

function Nav() {

    const [user, setuser] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [Open, setOpen] = useState(false)
    const [students, setStudents] = useState()
    const navigate = useNavigate()
    // const { id } = useParams()
    const dropdownRef = useRef(null)
    const theme = useContext(UserContext)
    // console.log("theme", theme)
    console.log(open)

    const activeUser = localStorage.getItem("username");
    console.log(activeUser, "activeusers")


    // const userObject = (activeUser);
    // const username = userObject.username
    // console.log(username)
    useEffect(() => {
        setuser(activeUser)
    })

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        function handleEscape(event) {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])

    function handleLogOut() {
        const logout = localStorage.removeItem("token")
        navigate("/login")


    }



    function handleProfile() {
        navigate(`/singleuser/1`)
    }
    function open() {
        setOpen(true)
    }
    function close() {
        setOpen(false)
    }


    return (
        <div>
            <nav className='flex justify-between text-xl bg-white h-[70px] pb-[20px]  md:w-full'>

                <div className='ml-[15px] flex'>
                    <img className='mt-[10px] ' src='/src/assets/lms-removebg-preview.png' width={50} />
                    <span className='md:text-xl text-[rgba(0, 0, 0, 0.658)] md:ml-[20px] pt-[20px] hidden md:block'>Learning Management System</span>
                </div>
                <button className="md:hidden block" onClick={open}>|||</button>
                {/* <ThemeToggle className=" hidden md:block " /> */}
                <div className='flex gap-5'>
                    <div className='text-gray-500 flex flex-col md:mt-[15px] mt-2 p-[0px] pb-[20px]'>
                        <p className='mt-0 text-[17px] mr-0 ml-0 mb-0 p-0'>{user} neil bung</p>
                        <p className='text-[17px] mt-0 mr-0 ml-0 mb-0 p-0'>(bc260213343)</p>
                    </div>
                    <img className='w-[50px] h-[50px] mt-[10px] rounded-[10px] cursor-pointer' src="/src/assets/profileIcon.webp" alt="" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} />
                    {isOpen && (
                        <ul className="bg-[#7c5cc4] h-[107px] p-0 m-0.5 text-start pt-0.5 pb-0.5 pl-0.5 pr-0.5 text-white text-[25px]">
                            <li className='cursor-pointer hover:text-[greenyellow]' onClick={handleProfile}>Profile</li>
                            <li className='cursor-pointer pt-[0px] pb-[0px] pl-[0px] pr-[0px] hover:text-[red]' onClick={handleLogOut}>Logout</li>
                            <li className='cursor-pointer pt-[0px] pb-[0px] pl-[0px] pr-[0px] hover:text-[red]'>Settings</li>

                        </ul>
                    )}
                    <div className='relative' >
                        {Open &&
                            <div className="w-[190px]  h-[807px] bg-[#282a3c] text-start absolute z-50 right-60 top-20 pl-5 mt-0">

                                <ul className='bg-[#282a3c] h-[807px] m-0 pt-[20px] text-start'>
                                    <button className="text-[30px] text-black bg-[#282a3c] border-none cursor-pointer w-[50px] rounded-[10px] pl-30 " id="closeBtn" onClick={close}>x</button>
                                    <div className='flex '>
                                        <img src="src/assets/home-removebg-preview.png" alt="" width={50} />
                                        <li className='mt-[16px] pr-10 pl-2 font-semibold'><Link className='text-white  no-underline font-bolder' to="/">Home</Link></li>
                                    </div>

                                    <div className='flex pt-5'>
                                        <img src="src/assets/student-removebg-preview.png" alt="" width={50} />
                                        <li className='mt-[15px] pt-0 pl-2 font-semibold'><Link className='text-white  no-underline font-bolder' to="/about">Student</Link> </li>
                                    </div>
                                    <div className='flex pt-5'>
                                        <img src="src/assets/images-removebg-preview.png" alt="" width={50}/>
                                        <li className='mt-[10px] m-0 pt-0 pl-2 font-semibold '><Link className='text-white  no-underline font-bolder' to="/posts"> Post</Link></li>
                                    </div>
                                </ul>
                            </div>}
                    </div>

                </div>

            </nav>
        </div>
    )
}
export default Nav

