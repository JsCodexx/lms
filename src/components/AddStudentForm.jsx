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
            <form className='flex ml-[40px] gap-[20px] h-[30px] mt-[20px]' onSubmit={handleSubmit}>
                <input className='border-2 border-purple-500 pl-1' type="text" placeholder="Name" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                <input className='border-2 border-purple-500 pl-1' type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                <input className='border-2 border-purple-500 pl-1' type="text" placeholder="University" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} />
                <button className='w-[150px] h-[30px] bg-[#883CE8] text-white cursor-pointer hover:text-black' type="submit">Add Student</button>
            </form>
        </div>
    )
}
