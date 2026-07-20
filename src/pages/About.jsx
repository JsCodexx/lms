import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { userData } from '../api/users'
import Studentstable from '../components/Studentstable'
import AddStudentForm from '../components/AddStudentForm'





function About() {
    const [users, setUsers] = useState("")
    const [students, setStudents] = useState([]);
    console.log(students)

    const getData = async () => {
        const student = await userData();
        // console.log("res", student)
        setStudents(student);
    }
    useEffect(() => {
        getData()
    }, [])
    const addStudent = (student) => {
        setStudents([...students, student]);
        console.log(student, "addstudents")

    };
    
    return (
        <div>
            <Nav />
            <AddStudentForm addStudent={addStudent} />
            <h1>Students Data </h1>
            <Studentstable user={students} />

        </div>
    )
}

export default About
