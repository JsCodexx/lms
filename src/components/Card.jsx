import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userData } from '../api/users'


export const Card = ({ data }) => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [students, setStudents] = useState()
    const [students_2, setStudents_2] = useState()
    const [students_3, setStudents_3] = useState()
    const [students_4, setStudents_4] = useState()
    console.log(students)

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
    const getData = async () => {
        const student = await userData();
        const single = student[0]
        const double = student[1]
        const third = student[2]
        const fourth = student[3]

        console.log(single)


        setStudents(single);
        setStudents_2(double)
        setStudents_3(third)
        setStudents_4(fourth)

    }

    useEffect(() => {
        getData()
    }, [])
    return (

        <div className='flex flex-wrap w-full'>

            <div className='md:w-full md:flex w-105'>
                {/* card-1 */}
                <div className='mt-[40px] mx-2 md:w-[45%] w-full h-[280px] bg-[rgba(255, 255, 255, 0.712)]    shadow-[0_15px_10px_rgba(0,0,0,0.15)]'>
                    <div className=' bg-gradient-to-r from-[#875df4] to-[#892be2] w-full h-[70px]'>
                        <h3 className='pl-2.5 m-0 text-white pt-[20px]'>CS - Total Atendance of Students</h3>
                    </div>
                    <h1 className='text-[35px] text-center  m-0 ml-[30px] pt-[40px]'> Total Students <br /> <b className='text-amber-900'>{data}</b> </h1>
                </div>
                {/* card-2 */}
                <div className='mt-[40px] md:ml-[25px] md:w-[45%] w-full mx-2 h-[280px] bg-[ rgba(255, 255, 255, 0.712)] shadow-[0_15px_10px_rgba(0,0,0,0.15)] '>
                    <div className=' bg-gradient-to-r from-[#875df4] to-[#892be2] w-full h-[70px]'>

                        <h3 className='pl-[10px] m-0 text-white pt-[20px]'> CS - Total Active Students</h3>
                    </div>
                    <h1 className='text-[35px] text-center text-black  m-0 ml-[30px] pt-[40px]'>Active Student <br />  <b className='text-amber-600'>158</b> </h1>
                </div>
                {/* card-3 */}
                <div className='mt-[40px] md:ml-[20px] md:w-[45%] w-full mx-2 h-[280px] bg-[rgba(255, 255, 255, 0.712)]    shadow-[0_15px_10px_rgba(0,0,0,0.15)]'>
                    <div className='bg-gradient-to-r from-[#875df4] to-[#892be2] w-full h-[70px]'>
                        <h3 className='pl-[10px] m-0 text-white pt-[20px]'>CS - Total Un-Active Students</h3>
                    </div>
                    <h1 className='text-[35px] text-center text-black  m-0 ml-[30px] pt-[40px]'>Absent Student <br /> <b className='text-red-600'> 50</b></h1>
                </div>
            </div>

            <div className='md:w-full md:flex md:flex-wrap md:ml-10 '>
                {/* card-4 */}
                <div className='mt-[40px] md:ml-[20px] md:w-[45%] w-full mx-2 h-[280px] bg-[rgba(255, 255, 255, 0.712)]    shadow-[0_15px_10px_rgba(0,0,0,0.15)]'>
                    <div className='bg-gradient-to-r from-[#875df4] to-[#892be2] w-full h-[70px]'>
                        <h3 className='pl-[10px] ml-5 m-0 text-white pt-[20px]'>CS - Registered Students</h3>
                    </div>
                    <div className='flex gap-20'>
                        <img className='mt-3 ml-5' src={students?.image} alt="emily" width={100} />
                        <div className='md:flex md:flex-col md:gap-1 text-sm mt-2' >
                            <h1 className='mt-5'>{students?.firstName} {students?.lastName}</h1>
                            <h1>{students?.university}</h1>    <h1>{students?.role}</h1>
                        </div>

                    </div>



                </div>
                {/* card-5 */}
                <div className='mt-[40px] md:ml-[20px] md:w-[45%] w-full mx-2 h-[280px] bg-[rgba(255, 255, 255, 0.712)]    shadow-[0_15px_10px_rgba(0,0,0,0.15)]'>
                    <div className='bg-gradient-to-r from-[#875df4] to-[#892be2] w-full h-[70px]'>
                        <h3 className='pl-[10px] m-0 text-white pt-[20px]'>CS - Registered Students</h3>
                    </div>
                    <div className='flex gap-20'>
                        <img className='mt-3 ml-5' src={students_2?.image} alt="emily" width={100} />
                        <div className='md:flex md:flex-col md:gap-1 text-sm mt-2' >
                            <h1 className='mt-5'>{students_2?.firstName} {students_2?.lastName}</h1>
                            <h1>{students_2?.university}</h1>    <h1>{students_2?.role}</h1>
                        </div>

                    </div>
                </div>
                {/* card-6 */}
                <div className='mt-[40px] md:ml-[20px] md:w-[45%] w-full mx-2 h-[280px] bg-[rgba(255, 255, 255, 0.712)]    shadow-[0_15px_10px_rgba(0,0,0,0.15)]'>
                    <div className='bg-gradient-to-r from-[#875df4] to-[#892be2] w-full h-[70px]'>
                        <h3 className='pl-[10px] m-0 text-white pt-[20px]'>CS - Registered Students</h3>
                    </div>
                    <div className='flex gap-20'>
                        <img className='mt-3 ml-5' src={students_3?.image} alt="emily" width={100} />
                        <div className='md:flex md:flex-col md:gap-1 text-sm mt-2' >
                            <h1 className='mt-5'>{students_3?.firstName} {students_3?.lastName}</h1>
                            <h1>{students_3?.university}</h1>    <h1>{students_3?.role}</h1>
                        </div>

                    </div>
                </div>
                {/* card-6 */}
                <div className='mt-[40px] md:ml-[20px] md:w-[45%] w-full mx-2 h-[280px] bg-[rgba(255, 255, 255, 0.712)]    shadow-[0_15px_10px_rgba(0,0,0,0.15)]'>
                    <div className='bg-gradient-to-r from-[#875df4] to-[#892be2] w-full h-[70px]'>
                        <h3 className='pl-[10px] m-0 text-white pt-[20px]'>CS -  Registered Students</h3>
                    </div>
                    <div className='flex gap-20'>
                        <img className='mt-3 ml-5' src={students_4?.image} alt="emily" width={100} />
                        <div className='md:flex md:flex-col md:gap-1 text-sm mt-2' >
                            <h1 className='mt-5'>{students_4?.firstName} {students_4?.lastName}</h1>
                            <h1>{students_4?.university}</h1>    <h1>{students_4?.role}</h1>
                        </div>

                    </div>
                </div>
                {/* card-6 */}
                <div className='mt-[40px] md:ml-[20px] md:w-[45%] w-full mx-2 h-[280px] bg-[rgba(255, 255, 255, 0.712)]    shadow-[0_15px_10px_rgba(0,0,0,0.15)]'>
                    <div className='bg-gradient-to-r from-[#875df4] to-[#892be2] w-full h-[70px]'>
                        <h3 className='pl-[10px] m-0 text-white pt-[20px]'>CS - Registered Students</h3>
                    </div>
                    <div className='flex gap-20'>
                        <img className='mt-3 ml-5' src={students_3?.image} alt="emily" width={100} />
                        <div className='md:flex md:flex-col md:gap-1 text-sm mt-2' >
                            <h1 className='mt-5'>{students_3?.firstName} {students_3?.lastName}</h1>
                            <h1>{students_3?.university}</h1>    <h1>{students_3?.role}</h1>
                        </div>

                    </div>
                </div>
                {/* card-6 */}
                <div className='mt-[40px] md:ml-[20px] md:w-[45%] w-full mx-2 h-[280px] bg-[rgba(255, 255, 255, 0.712)]    shadow-[0_15px_10px_rgba(0,0,0,0.15)]'>
                    <div className='bg-gradient-to-r from-[#875df4] to-[#892be2] w-full h-[70px]'>
                        <h3 className='pl-[10px] m-0 text-white pt-[20px]'>CS - Registered Students</h3>
                    </div>
                    <div className='flex gap-20'>
                        <img className='mt-3 ml-5' src={students_3?.image} alt="emily" width={100} />
                        <div className='md:flex md:flex-col md:gap-1 text-sm mt-2' >
                            <h1 className='mt-5'>{students_3?.firstName} {students_3?.lastName}</h1>
                            <h1>{students_3?.university}</h1>    <h1>{students_3?.role}</h1>
                        </div>

                    </div>
                </div>








            </div>


        </div>


    )
}


