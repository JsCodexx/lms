import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { userData } from '../api/users'
import Studentstable from '../components/Studentstable'




function About() {
    const [users, setUsers] = useState("")
    console.log(users, "students")
    const getData = async () => {
        const student = await userData();
        console.log("res", student)
        setUsers(student);
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Nav />
            <h1>Students Data </h1>
            <Studentstable user={users} />

        </div>
    )
}

export default About
