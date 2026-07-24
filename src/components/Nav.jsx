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
    console.log("theme", theme)

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
            <nav className='flex justify-between text-xl bg-white h-[70px] pb-[20px] w-full'>

                <div className='ml-[15px] flex'>
                    <img className='mt-[05px]' src='/src/assets/lms-removebg-preview.png' width={100} />
                    <span className='text-xl text-[rgba(0, 0, 0, 0.658)] ml-[20px] pt-[20px]'>Learning Management System</span>
                </div>
                <button className="hidden" onClick={open}><img src="/src/assets/lines-removebg-preview.png" alt="lines" width={50} /></button>
                <ThemeToggle />
                <div className='flex gap-5'>
                    <div className='text-gray-500 flex flex-col mt-[15px] p-[0px] pb-[20px]'>
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
                    <div >
                        {Open &&
                            <div className="w-[202px] h-[807px] bg-[#282a3c] text-start">

                                <ul className='bg-[#282a3c] h-[807px] m-0 pt-[20px] text-start'>
                                    <button className="text-[30px] text-black bg-[#282a3c] border-none cursor-pointer w-[50px] rounded-[10px] " id="closeBtn" onClick={close}>x</button>
                                    <li className='mt-[5px]'><Link className='text-white no-underline font-extrabold' to="/">Home</Link></li>
                                    <li className='mt-[5px]'><Link className='' text-white no-underline font-extrabold to="/about">Student</Link> </li>
                                    <li className='mt-[5px]'><Link className='' text-white no-underline font-extrabold to="/posts"> Post</Link></li>
                                </ul>



                            </div>}
                    </div>

                </div>

            </nav>
        </div>
    )
}
export default Nav

