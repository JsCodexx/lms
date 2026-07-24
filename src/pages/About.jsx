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





function About() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState("");
    const [students, setStudents] = useState(() => {
        const savedStudents = localStorage.getItem("students")
        return savedStudents ? JSON.parse(savedStudents) : [];
    });
    // console.log(students)

    useEffect(() => {
        privateAxios.interceptors.response.use(
            (config) => {
                setLoading(false);
                return config;
            },
            (error) => {
                return Promise.reject(error);
            },
        );

        privateAxios.interceptors.request.use(
            (config) => {
                setLoading(true);
                return config;
            },
            (error) => {
                return Promise.reject(error);
            },
        );
    }, []);
    useEffect(() => {
        const currentData = localStorage.setItem('students', JSON.stringify(students))
        console.log(currentData, "data")
    }, [students])

    const getData = async () => {
        const student = await userData();
        // console.log("res", student)
        setStudents(student);
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
        <div>
            <Nav users={students} />
            <div className='flex gap-[20px]'>
                <div>   <Sidebar /></div>

                <div>
                    <AddStudentForm addStudent={addStudent} />
                    <h1 className='text-transparent'>Students Data </h1>

                    <Loaders show={loading} />

                    <Studentstable user={students} />
                </div>


            </div>

            <Footer />

        </div>
    )
}

export default About
