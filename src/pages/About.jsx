import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { userData } from '../api/users'
import Studentstable from '../components/Studentstable'
import AddStudentForm from '../components/AddStudentForm'
import Loaders from '../components/Loader'
import privateAxios from "axios";
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { useContext } from 'react';
import { MyContext } from '../contextApi/Loader';







function About() {
    const { loader, setLoader } = useContext(MyContext)

    const [users, setUsers] = useState("");
    const [students, setStudents] = useState(() => {
        const savedStudents = localStorage.getItem("students")
        return savedStudents ? JSON.parse(savedStudents) : [];
    });

    useEffect(() => {
        const currentData = localStorage.setItem('students', JSON.stringify(students))
        console.log(currentData, "data")
    }, [students])

    const getData = async () => {
        setLoader(true)
        try {
            const student = await userData();
            // console.log("res", student)
            setStudents(student);
        } catch (error) {
            console.log(error)

        } finally {
            setLoader(false)
        }

    }

    useEffect(() => {
        getData()
    }, [])

    const addStudent = (newStudents) => {
        console.log(newStudents)
        setStudents((prevStudents) => [
            ...prevStudents, newStudents
        ]

        );
        console.log(students, "addstudents")

    };

    return (
        <div className='bg-[#F2F3F8]'>
            <div className='  w-full'><Nav users={students} /></div>

            {loader ? <Loaders /> :
                <div className='flex'>
                    <div >   <Sidebar /></div>

                    <div>
                        <AddStudentForm addStudent={addStudent} />


                        {/* <Loaders show={loading} /> */}

                        <Studentstable user={students} />
                    </div>


                </div>}


            <Footer />

        </div>
    )
}

export default About
