import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function Studentstable({ user }) {
    const [search, setSearch] = useState('')
    // console.log(user, "use")
    const navigate = useNavigate()
    function handleButton(user) {
        navigate(`/singleuser/${user}`)
    }
    function searchName(e) {
        setSearch(e.target.value)
    }
    const filterData = user.filter((data) => {
        var searched = search.toUpperCase()
        var userName = data?.firstName?.toUpperCase()
        // console.log(userName)
        return userName?.includes(searched)
    })
    return (
        <div>
            <input className='w-[50%] mb-[30px] ml-[40px] h-[25px] rounded-[2px] border-2 border-[#7c5cc4] bg-transparent' type="text" placeholder='Enter Username' onChange={searchName} />
            <table className='w-full ml-[20px] m-auto border-collapse overflow-x-scroll'>
                <thead>
                    <tr className=' bg-gradient-to-r from-[#875df4] to-[#892be2]'>
                        <th className='text-white font-bold text-[23px] font-mono border-2 border-gray-400  p-[12px] text-left'>Id</th>
                        <th className='text-white font-bold text-[23px] font-mono border-2 border-gray-400  p-[12px] text-left'>Name</th>
                        <th className='text-white font-bold text-[23px] font-mono border-2 border-gray-400  p-[12px] text-left'>Age</th>
                        <th className='text-white font-bold text-[23px] font-mono border-2 border-gray-400  p-[12px] text-left'>Birth-date</th>
                        <th className='text-white font-bold text-[23px] font-mono border-2 border-gray-400  p-[12px] text-left'>Gender</th>
                        <th className='text-white font-bold text-[23px] font-mono border-2 border-gray-400  p-[12px] text-left'>University</th>
                        <th className='text-white font-bold text-[23px] font-mono border-2 border-gray-400  p-[12px] text-left'>Image</th>
                        <th className='text-white font-bold text-[23px] font-mono border-2 border-gray-400  p-[12px] text-left'>View Profile</th>

                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {Array.isArray(filterData) && filterData.map((users) => (
                        <tr >
                            <td className=' border-2 border-gray-400 p-[12px]  text-left text-black'>{users.id}-</td>
                            <td className='border-2 border-gray-400  p-[12px] text-left text-black'>{users.firstName}</td>
                            <td className='border-2 border-gray-400 p-[12px] text-left text-black'>{users.age}</td>
                            <td className='border-2 border-gray-400 p-[12px] text-left text-black'>{users.birthDate}</td>
                            <td className='border-2 border-gray-400 p-[12px] text-left text-black'>{users.gender}</td>
                            <td className='border-2 border-gray-400 p-[12px] text-left text-black'>{users.university}</td>
                            <td className='border-2 border-gray-400 p-[12px] text-left text-black'>
                                <img src={users.image} alt={users.firstName} width="50" />
                            </td>
                            <td className='border-2 border-gray-400 p-[12px] text-left text-black'>
                                <button onClick={() => { handleButton(users.id) }} className='w-[100px] cursor-pointer h-[25px] bg-[#893FE8] text-white'>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
