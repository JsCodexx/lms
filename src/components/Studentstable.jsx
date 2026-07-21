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
            <input className='userData' type="text" placeholder='Enter Username' onChange={searchName} />
            <table>
                <thead>
                    <tr className='header'>
                        <th className='color'>Id</th>
                        <th className='color'>Name</th>
                        <th className='color'>Age</th>
                        <th className='color'>Birth-date</th>
                        <th className='color'>Gender</th>
                        <th className='color'>University</th>
                        <th className='color'>Image</th>
                        <th className='color'>View Profile</th>

                    </tr>
                </thead>
                <tbody className='lower'>
                    {Array.isArray(filterData) && filterData.map((users) => (
                        <tr >
                            <td>{users.id}-</td>
                            <td>{users.firstName}</td>
                            <td>{users.age}</td>
                            <td>{users.birthDate}</td>
                            <td>{users.gender}</td>
                            <td>{users.university}</td>
                            <td>
                                <img src={users.image} alt={users.firstName} width="50" />
                            </td>
                            <td>
                                <button onClick={() => { handleButton(users.id) }} className='viewProfile'>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
