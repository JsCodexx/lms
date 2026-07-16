
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../api/auth/loginApi';
import { useEffect } from 'react';


export default function Login() {
    const [data, setData] = useState("");
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');



    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        // console.log(username, password, "data")
        const correctData1 = await loginApi(username, password);
        const { refreshToken, ...correctData } = correctData1;
        const { user, ...userData } = correctData1
        console.log(correctData1)

        localStorage.setItem("token", JSON.stringify(correctData.accessToken));
        localStorage.setItem("username", username);

        sessionStorage.setItem("refreshToken", refreshToken);

        if (correctData1) {
            navigate("/")
        }
        else {
            alert("please enter correct password!")
        }

    }

    return (
        <>
        <h1 style={{color:"black"}}>LMS</h1>
            <div style={{ maxWidth: '400px', height: "350px", margin: '50px auto', padding: '20px', border: '1px solid #ccc',backgroundColor:"#875df4" }}>

              



                <form style={{ display: 'flex', flexDirection: 'column', width: "300px" }} onSubmit={handleSubmit} >
                    <div style={{ marginBottom: '15px' }}>

                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => { setusername(e.target.value) }}
                            required

                            style={{ width: '100%', padding: '8px', marginTop: '5px',borderRadius:"10px" , border:"transparent" }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => { setpassword(e.target.value) }}

                            required

                            style={{ width: '100%', padding: '8px', marginTop: '5px',borderRadius:"10px", border:"transparent" }}
                        />
                    </div>

                    <button type='submit' style={{ width: '50%',cursor:"pointer", border:"transparent", padding: '10px',marginLeft:"70px",fontSize:"20px", backgroundColor:"white",fontWeight:"bolder" }}>
                        login
                    </button>
                </form>

            </div >
        </>
    );
}
