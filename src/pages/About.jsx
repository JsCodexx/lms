import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { userData } from '../api/users'
import Studentstable from '../components/Studentstable'
import AddStudentForm from '../components/AddStudentForm'
import Loaders from '../components/Loader'
import privateAxios from "axios";
import Footer from '../components/Footer'





function About() {
    const [loading, setLoading] = useState(false);

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
            <Loaders show={loading} />
            <Studentstable user={students} />
            <Footer />

        </div>
    )
}

export default About
