import React from 'react'
import { useState } from 'react'

export default function AddStudentForm({ addStudent }) {
    const [firstName, setfirstName] = useState('');
    const [age, setAge] = useState('');
    const [studentClass, setStudentClass] = useState('');

    const i = 31


    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent({ id: i, firstName: firstName, age: age, university: studentClass })
        setfirstName('');
        setAge('');
        setStudentClass('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="text" placeholder="University" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} />
                <button className='addStudents' type="submit">Add Student</button>
            </form>
        </div>
    )
}
