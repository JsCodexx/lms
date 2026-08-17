import React from 'react'
import { useState } from 'react'

export default function AddStudentForm({ addStudent }) {
    const [firstName, setfirstName] = useState('');
    const [age, setAge] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [gender, setGender] = useState()
    const [birth, setBirth] = useState()
    const [isOpen, setIsOpen] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent({ id: Date.now(), firstName: firstName, age: age, university: studentClass, gender: gender, birth: birth })
        setfirstName('');
        setAge('');
        setStudentClass('');
        setGender('')
        setBirth("")
        alert("student data add succesfully!")
    }




    return (
        <>
            <div onClick={() => { setIsOpen(true) }} className='md:flex ml-8 md:ml-5  md:mt-4  cursor-pointer bg-white w-50 pl-5'>
                <h3 className='md:mt-1 md:text-2xl font-medium text-black font-serif  ' >Add Student</h3>
                <button className='cursor-pointer  mt-1'><img src="/src/assets/addIcon-removebg-preview.png" alt="add" width={30} /></button>
            </div>
            {isOpen && (
                <dialog open className='md:ml-80 ml-4 mt-2 w-100 border-2 border-purple-700  bg-white h-95 md:pt-0 mt-3 md:pl-3 ' >
                    <div>
                        <button className='ml-90 text-3xl text-purple-500 cursor-pointer' onClick={() => { setIsOpen(false) }}>x</button>
                        <h1 className='ml-10 text-purple-700 text-2xl font-bold'>Student Registration Form</h1>
                        <form className='md:flex-1 w-70 ml-[40px] gap-[20px] h-[30px] mt-[20px] ' onSubmit={handleSubmit} >
                            <input className='border-2 w-74 border-purple-500 pl-1 0' type="text" placeholder="Name" value={firstName} onChange={(e) => setfirstName(e.target.value)} required />
                            <input className='border-2 w-74 border-purple-500 pl-1 mt-4' type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />

                            <input className='border-2 w-74 border-purple-500 pl-1 mt-4' type="text" placeholder="University" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} required />
                            <input type="date" className='border-2 w-74 border-purple-500 pl-1 mt-4' placeholder="Enter Birth" onChange={(e) => setBirth(e.target.value)} />
                            <input onClick={() => { setGender("male") }} className='mt-3' type="radio" name="gender" value="male" />
                            <label className='text-purple-700' >Male</label>
                            <br />
                            <input onClick={() => { setGender("female") }} className='mt-3' type="radio" name="gender" value="female" />
                            <label className='text-purple-700' >Female</label>
                            <br />
                            <button className='w-[150px] h-[30px] bg-[#883CE8] text-white cursor-pointer hover:text-black mt-3' type="submit">Add Student</button>
                        </form>
                    </div>
                </dialog>
            )}

        </>
    )
}
