import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Studentstable({ user }) {
    console.log(user, "use")
    const navigate = useNavigate()
    function handleButton() {
        navigate("/singleuser")
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Birth-date</th>
                        <th>Gender</th>
                        <th>University</th>
                        <th>Image</th>
                        <th>View Profile</th>

                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(user) && user.map((users) => (
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
                                <button onClick={handleButton} className='viewProfile'>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
