// import React from 'react'
// import { useNavigate } from 'react-router-dom'


// export default function Login({setUser}) {
//     const navigate = useNavigate();
//     function handleSubmit() {

//         setUser({ loggedin: "waleed" })
//         navigate("/")
//     }
//     return (
//         <div>
//             <div><h1 >Login</h1></div>
//             <button className='login' onClick={handleSubmit} >login</button>
//         </div>
//     )
// }
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../api/auth/loginApi';
import { useEffect } from 'react';


export default function Login() {
    const [data, setData] = useState("");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const getData = async () => {
        const student = await loginApi();
        console.log("res", student)
        setData(student);
        localStorage.setItem("token", JSON.stringify(student))



    }
    useEffect(() => {
        getData()
    }, [])
    const navigate = useNavigate()
    function handleSubmit() {
        navigate("/")
    }





    return (
        <div style={{ maxWidth: '400px', height: "350px", margin: '50px auto', padding: '20px', border: '1px solid #ccc' }}>
            <h2>Login</h2>


            <form style={{ display: 'flex', flexDirection: 'column', width: "300px" }} >
                <div style={{ marginBottom: '15px' }}>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }}


                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}



                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <button onClick={handleSubmit} type='submit' style={{ width: '100%', padding: '10px' }}>
                    login
                </button>
            </form>
        </div>
    );
}
