
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../api/auth/loginApi';
import { useEffect } from 'react';


export default function Login() {
    const [data, setData] = useState("");
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [loader, setLoader] = useState(false)

    console.log(loader)

    const navigate = useNavigate()

    async function handleSubmit(e) {
        try {
            e.preventDefault()
            setLoader(true)
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
        } catch (error) {
            console.log(error)
        } finally {
            setLoader(false)
        }







    }


    return (
        <div className='log'>


            <div className='sign'>

                <div style={{ maxWidth: '400px', height: "350px", marginTop: '70px', marginLeft: "150px", padding: '20px', }}>

                    <img className='lamp' src="/src/assets/lms-removebg-preview.png" alt="pic" />



                    <form style={{ display: 'flex', flexDirection: 'column', width: "300px", marginRight: "50px", marginTop: "60px" }} onSubmit={handleSubmit} >
                        <div style={{ marginBottom: '15px', width: "100%", marginRight: "20px" }}>

                            <label>Username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => { setusername(e.target.value) }}
                                required

                                style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: "10px", border: "transparent", backgroundColor: "#E8F0FE", paddingRightRight: "30px" }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => { setpassword(e.target.value) }}

                                required

                                style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: "10px", border: "transparent", backgroundColor: "#E8F0FE" }}
                            />
                        </div>

                        <button
                            type='submit'
                            style={{
                                width: "40%",
                                cursor: "pointer",
                                border: "none",
                                padding: "10px",
                                marginLeft: "70px",
                                fontSize: "20px",
                                color: "white",
                                backgroundColor: "#875df4",
                                fontWeight: "bold",
                                borderRadius: "800px"
                            }}


                        >
                            {loader ? "Loading..." : "Login"}
                        </button>

                    </form>

                </div >
                <div >
                    <img src="/src/assets/screenshot.png" alt="picture" />
                </div>
            </div>
        </div>
    );
}
