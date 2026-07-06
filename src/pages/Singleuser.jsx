import React, { useState } from 'react'
import Nav from '../components/Nav'
import { SingleUserData } from '../api/users'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Singleuser() {
    const { id } = useParams();
    console.log(id, "id")
    const [single, setSingleUser] = useState("")
    console.log(single, "single")
    const getSingleData = async () => {
        const student = await SingleUserData(id);
        console.log("res", student)
        setSingleUser(student);
    }
    useEffect(() => {
        getSingleData()
    }, [id])
    return (
        <div>
            <Nav />
            <h1>Profile</h1>
            <div className='userDetails'>
                <div className='image'>
                    <img className='detailedImage' src={single.image} alt={single.firstName} />
                </div>


                <div className='main' key={single.email}>
                    <h2 className='about'>About</h2>
                    <h2>Full Name: {single.firstName}</h2>
                    <h2>E-mail: {single.email}</h2>
                    <h2>Phone: {single.phone}</h2>
                    <h2>Age: {single.age}</h2>
                    <h2 className='about'>University Details</h2>
                    <h2>University: {single.university}</h2>
                    <h2>Password: {single.password}</h2>
                    <h2>role: {single.role}</h2>


                </div>

            </div>


        </div>
    )
}
