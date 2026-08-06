import React, { use, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contextApi/Context'
import { ThemeToggle } from './ThemeToggle'
import { useRef, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import { Current } from '../contextApi/currentUser'
// import { ThemeToggle } from './ThemeToggle'



import { useState } from 'react'

function Nav() {

    const [user, setuser] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [Open, setOpen] = useState(false)
    const [students, setStudents] = useState()
    const navigate = useNavigate()
    const { username } = useContext(UserContext)
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
        <div className='max-w-full h-full '>
            <div className='md:flex justify-between min-w-full' >
                <nav className='flex justify-between  text-xl bg-white h-[70px] pb-[20px]  md:w-full  '>

                    <div className='md:ml-[40px] flex'>
                        <img className='mt-[10px] ml-5 md:ml-15 ' src='/src/assets/lms-removebg-preview.png' width={50} />
                        <span className='md:text-2xl font-semibold text-[rgba(0, 0, 0, 0.658)] md:ml-[20px]  pt-[20px] hidden md:block'>Learning Management System</span>
                    </div>
                    <button className="md:hidden  block" onClick={open}>|||</button>
              
                    <div className='flex gap-5'>
                        <div className='text-gray-500 flex flex-col md:mt-[15px] mt-2 p-[0px] pb-[20px]'>
                            <p className='mt-0 text-[17px] mr-0 ml-0 mb-0 p-0'>{user} neil bung</p>
                            <p className='text-[17px] mt-0 mr-0 ml-0 mb-0 p-0'>(bc260213343)</p>
                        </div>
                        <img className='w-[50px] h-[50px] mt-[10px] rounded-[10px] cursor-pointer' src="/src/assets/profileIcon.webp" alt="" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} />
                        {isOpen && (
                            <div className='relative  '>
                                <ul className="bg-white  w-40 absolute top-20 right-10 h-[125px] p-0 m-0.5 text-start pt-0.5 pb-0.5 pl-0.5 pr-0.5 text-gray-700 text-[25px]">
                                    <div className='flex pt-1'>
                                        <img src="src/assets/profileIcon-removebg-preview.png" alt="" width={40} />
                                        <li className='cursor-pointer hover:text-[blue]' onClick={handleProfile}>Profile</li>
                                    </div>
                                    <div className='flex ml-0 pt-1 '>
                                        <img src="src/assets/setting-removebg-preview.png" alt="" width={40} />
                                        <li className='cursor-pointer hover:text-[gray]' onClick={handleProfile}>Setting</li>
                                    </div>
                                    <div className='flex ml-2 pt-1 '>
                                        <img src="src/assets/logout-removebg-preview.png" alt="" width={25} />
                                        <li className='cursor-pointer ml-2 hover:text-[red]' onClick={handleLogOut}>Logout</li>
                                    </div>


                                </ul>
                            </div>

                        )}

                        <div className='relative' >
                            {Open &&
                                <div className="w-[190px]  h-[807px] bg-[#282a3c] text-start absolute z-50 right-62 top-20 pl-5 mt-0">

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
                                            <img src="src/assets/images-removebg-preview.png" alt="" width={50} />
                                            <li className='mt-[10px] m-0 pt-0 pl-2 font-semibold '><Link className='text-white  no-underline font-bolder' to="/posts"> Post</Link></li>
                                        </div>
                                    </ul>
                                </div>}
                        </div>

                    </div>

                </nav>
            </div>

        </div>
    )
}
export default Nav

